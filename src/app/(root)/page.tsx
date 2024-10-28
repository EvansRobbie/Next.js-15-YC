import { auth } from '@/_helpers/auth';
import SearchForm from '@/components/shared/search-form';
import StartupCard, {
  StartupTypeCard,
} from '@/components/shared/start-up-card';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  // const posts = await client.fetch(STARTUPS_QUERY)
  const params = {search:query || null}
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  const session = await auth();
  console.log(session)

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>
      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: unknown) => (
              // @ts-expect-error Type 'unknown' is not assignable to type 'StartupTypeCard'.
              <StartupCard key={post?._id} post={post as StartupTypeCard} />
            ))
          ) : (
            <p className='no-results'>No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
