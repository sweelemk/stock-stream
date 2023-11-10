import Text from "./text";
import Heading from "./heading";
import Link from "./link";

export type TypographyProps = {
  Link: typeof Link;
  Heading: typeof Heading;
  Text: typeof Text;
}

const Typography = {} as TypographyProps;

Typography.Link = Link;
Typography.Heading = Heading;
Typography.Text = Text;

export default Typography;