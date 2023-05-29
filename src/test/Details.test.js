import ReactThreeTestRenderer from "@react-three/test-renderer";
import HachaModel from "./../HachaModel";

describe("Details_function", () => {
  test("test_details_component_renders_with_valid_props", async () => {
    const props = {
      title: "Test Title",
      url_img: "https://testimage.com",
      description: "Test Description",
      handleClose: jest.fn(),
    };
    const renderer = await ReactThreeTestRenderer.create(
      <HachaModel />
    );
    const mesh = renderer.scene.children[0]
    
    expect(mesh.getByAltText("Hacha Vikinga")).toBeInTheDocument();
    expect(mesh.getByText(props.description)).toBeInTheDocument();
  });
  
});
