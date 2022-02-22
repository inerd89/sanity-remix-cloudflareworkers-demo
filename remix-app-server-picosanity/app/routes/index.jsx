import { useLoaderData, Link } from "remix"
import { sanityClient } from "~/utils/sanity/sanity.server";

export async function loader() {
	const movies = await sanityClient.fetch(
		`*[_type == "movie"]{ _id, title, slug }`
	);

	return { movies };
}

export default function Index() {
  let { movies } = useLoaderData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
			{movies?.length > 1
				? movies.map((movie) => (
						<div style={{ padding: 10 }} key={movie._id}>
							<Link to={movie.slug.current}>{movie.title}</Link>
						</div>
				  ))
				: null }
		</div>
  );
}
