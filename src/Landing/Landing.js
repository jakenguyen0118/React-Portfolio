// landing animation code used from sources below
// https://bashooka.com/coding/react-animation-examples/
// https://codesandbox.io/s/y3j31r13zz

import * as THREE from 'three/src/Three'
import React, { useRef, useEffect, useCallback, useMemo } from 'react'
// A THREE.js React renderer, see: https://github.com/drcmda/react-three-fiber
import {
	extend as applyThree,
	Canvas,
	useFrame,
	useThree,
} from 'react-three-fiber'
// A React animation lib, see: https://github.com/react-spring/react-spring
import {
	apply as applySpring,
	useSpring,
	a,
	interpolate,
} from 'react-spring/three'
import './styles.css'

// Import and register postprocessing classes as three-native-elements for both react-three-fiber & react-spring
// They'll be available as native elements <effectComposer /> from then on ...
import { EffectComposer } from './postprocessing/EffectComposer'
import { RenderPass } from './postprocessing/RenderPass'
import { GlitchPass } from './postprocessing/GlitchPass'
applySpring({ EffectComposer, RenderPass, GlitchPass })
applyThree({ EffectComposer, RenderPass, GlitchPass })

/** This renders text via canvas and projects it as a sprite */
function Text({
	children,
	position,
	opacity,
	color = 'white',
	fontSize = 150,
}) {
	const {
		size: { width, height },
		viewport: { width: viewportWidth, height: viewportHeight },
	} = useThree()
	const scale = viewportWidth > viewportHeight ? viewportWidth : viewportHeight
	const canvas = useMemo(() => {
		const canvas = document.createElement('canvas')
		canvas.width = canvas.height = 2048
		const context = canvas.getContext('2d')
		context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
		context.textAlign = 'center'
		context.textBaseline = 'middle'
		context.fillStyle = color
		context.fillText(children, 1024, 1024 - 150 / 2)
		return canvas
	}, [children, width, height])
	return (
		<a.sprite scale={[scale, scale, 1]} position={position}>
			<a.spriteMaterial attach='material' transparent opacity={opacity}>
				<canvasTexture
					attach='map'
					image={canvas}
					premultiplyAlpha
					onUpdate={(s) => (s.needsUpdate = true)}
				/>
			</a.spriteMaterial>
		</a.sprite>
	)
}

/** This component creates a fullscreen colored plane */
function Background({ color }) {
	const { viewport } = useThree()
	return (
		<mesh scale={[viewport.width, viewport.height, 1]}>
			<planeGeometry attach='geometry' args={[1, 1]} />
			<a.meshBasicMaterial attach='material' color={color} depthTest={false} />
		</mesh>
	)
}

/** This component rotates a bunch of stars */
function Stars({ position }) {
	let group = useRef()
	let theta = 0
	useFrame(() => {
		const r = 5 * Math.sin(THREE.Math.degToRad((theta += 0.01)))
		const s = Math.cos(THREE.Math.degToRad(theta * 2))
		group.current.rotation.set(r, r, r)
		group.current.scale.set(s, s, s)
	})
	const [geo, mat, coords] = useMemo(() => {
		const geo = new THREE.SphereBufferGeometry(1, 10, 10)
		const mat = new THREE.MeshBasicMaterial({
			color: new THREE.Color('peachpuff'),
			transparent: true,
		})
		const coords = new Array(1000)
			.fill()
			.map((i) => [
				Math.random() * 800 - 400,
				Math.random() * 800 - 400,
				Math.random() * 800 - 400,
			])
		return [geo, mat, coords]
	}, [])
	return (
		<a.group ref={group} position={position}>
			{coords.map(([p1, p2, p3], i) => (
				<mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]} />
			))}
		</a.group>
	)
}

/** This component creates a glitch effect */
const Effects = React.memo(({ factor }) => {
	const { gl, scene, camera, size } = useThree()
	const composer = useRef()
	useEffect(() => void composer.current.setSize(size.width, size.height), [
		size,
	])
	// This takes over as the main render-loop (when 2nd arg is set to true)
	useFrame(() => composer.current.render(), 1)
	return (
		<effectComposer ref={composer} args={[gl]}>
			<renderPass attachArray='passes' args={[scene, camera]} />
			<a.glitchPass attachArray='passes' renderToScreen factor={factor} />
		</effectComposer>
	)
})

/** This component maintains the scene */
function Scene({ top, mouse }) {
	const { size } = useThree()
	const scrollMax = size.height * 4.5
	return (
		<>
			<Effects factor={top.interpolate([0, 150], [1, 0])} />
			<Background
				color={top.interpolate(
					[0, scrollMax * 0.25, scrollMax * 0.8, scrollMax],
					['#27282F', '#247BA0', '#70C1B3', '#f8f3f1']
				)}
			/>
			<Stars position={top.interpolate((top) => [0, -1 + top / 20, 0])} />
			<Text
				opacity={top.interpolate([0, 200], [1, 0])}
				position={top.interpolate((top) => [0, -1 + top / 200, 0])}>
				Jake Nguyen
			</Text>
		</>
	)
}

/** Main component */
function Landing() {
	// This tiny spring right here controlls all(!) the animations, one for scroll, the other for mouse movement ...
	const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
	const onMouseMove = useCallback(
		({ clientX: x, clientY: y }) =>
			set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
		[]
	)
	const onScroll = useCallback((e) => set({ top: e.target.scrollTop }), [])
	return (
		<>
			<Canvas className='canvas' id='home'>
				<Scene top={top} mouse={mouse} />
			</Canvas>
		</>
	)
}

export default Landing