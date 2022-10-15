import { PageProps } from "$fresh/server.ts";

export default function NotFound(props: PageProps) {
  return <h2>"{props.params.name}" is not a valid route.</h2>;
}
