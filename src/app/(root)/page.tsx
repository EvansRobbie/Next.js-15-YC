import SearchForm from "@/components/shared/search-form";
import StartupCard from "@/components/shared/start-up-card";

const posts = [
  {
    _CreatedAt: "Yesterday",
    views:55,
    author:{_id:1},
    _id:1,
    description:"This is a description",
    title:"title",
    category:"category",
    image:"https://cdn.pixabay.com/photo/2022/06/08/02/44/cherry-7249543_1280.jpg"
  }
]

export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
}) {
  const query = (await searchParams).query
  return (
    <>
      <section className="pink_container">
      <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query}/>

      </section>
      <section className="section_container">
      <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
