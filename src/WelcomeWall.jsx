import { Text } from '@react-three/drei';

export default function WelcomeWall() {
    return (
        <>
            <mesh receiveShadow position={[-18, 13, 15]} rotation-z={-Math.PI * 2}>
                <planeGeometry args={[30, 50, 2]} />
                <meshStandardMaterial color="#0061C2" />

                <Text
                    position={[0, 0, 0.1]}
                    fontSize={2}
                    maxWidth={20}
                    lineHeight={1}
                    letterSpacing={-0.05}
                    textAlign={'center'}
                    color="white"
                >
                    Road to Valhalla
                </Text>
            </mesh>
            <mesh receiveShadow position={[45, 9, -20]} rotation-x={-Math.PI * 90}>
                <planeGeometry args={[200, 50]} />
                <meshStandardMaterial color="aquamarine" />
            </mesh>
        </>
    );
}
