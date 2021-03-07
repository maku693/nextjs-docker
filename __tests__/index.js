import { render } from "@testing-library/react";
import Index from "@/pages/index";

describe("Index", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<Index />);
    expect(asFragment()).toMatchSnapshot();
  });
});
