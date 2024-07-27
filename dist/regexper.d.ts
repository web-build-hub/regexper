/**
 * Regular Expression Parser
 */
declare class Parser {
  /**
   * Initialize the regular expression parser
   * @param svgContainer The container used for rendering SVG
   */
  constructor(svgContainer: HTMLElement);
  /**
   * Warning messages generated during the rendering process of svg.
   */
  get warnings(): string[];
  /**
   * Parse the regular expression to generate a renderable object.
   * @param expression The string representation of the regular expression.
   * @returns A render object that can be used to generate an svg.
   */
  parse(expression: string): Promise<{
      render: () => any;
  }>;
}
/**
* Visualize the regular expression and generate an SVG to be rendered in `svgContainer`.
* @param expression The string representation of the regular expression
* @param svgContainer The container used for rendering the SVG
*/
declare function render(expression: string, svgContainer: HTMLElement): void;
export { Parser, render };
declare const _default: {
  Parser: typeof Parser;
  render: typeof render;
};
export default _default;
