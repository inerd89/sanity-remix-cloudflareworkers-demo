import { useState } from "react";
import { useLoaderData } from "remix";
import { sanityClient } from "~/utils/sanity/sanity.server";
import { PortableText, urlFor } from "~/utils/sanity/helpers";

export async function loader({ params }) {
	const initialData = await sanityClient.fetch(
		`*[_type == "movie" && slug.current == $slug]`,
		{ slug: params.slug }
	);

	return { initialData };
}

export default function Movie() {
	let { initialData } = useLoaderData();
	let movie = initialData[0]

	return (
		<div style={{ textAlign: "center", padding: 20 }}>
		{movie?.title ? <h1>{movie.title}</h1> : null}
		{movie?.poster ? (
			<img
				loading="lazy"
				src={urlFor(movie.poster).width(400).height(200)}
				width="400"
				height="200"
				alt={movie?.title ?? ``}
			/>
		) : null}
		{movie?.overview?.length > 0 ? (
			<div style={{maxWidth: `20rem`, margin: `0 auto`, lineHeight: 1.5}}>
				<PortableText value={movie?.overview} />
			</div>
		) : null}
		</div>
	);
}
