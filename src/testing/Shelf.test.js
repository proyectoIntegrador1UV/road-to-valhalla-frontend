import ReactThreeTestRenderer from "@react-three/test-renderer";
import Shelf from "../home/components/Shelf";

describe('Shelf component',() =>{
    test('mesh to have two childer', async () => {
        const renderer = await ReactThreeTestRenderer.create(<Shelf/>)
        const mesh = renderer.scene.children[0].allChildren
        expect(mesh.length).toBe(2);
    });

    test("shloud meshStandardMaterial have a default color", async () => {
      const renderer = await ReactThreeTestRenderer.create(<Shelf />);
      const searchByColor = renderer.scene.findAll(
        (node) => node.props.color === "#2C3E50"
      )
      expect(searchByColor.length).toBe(1);
    });
})