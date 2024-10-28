import { client } from '@/sanity/lib/client';

// import { unstable_after as after } from "next/server";
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import Ping from './ping';

const View = async ({ id }: { id: string }) => {
  // @ts-expect-error next-sanity is not typed
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // after(
  //   async () =>
  //     await writeClient
  //       .patch(id)
  //       .set({ views: totalViews + 1 })
  //       .commit(),
  // );

  return (
    <div className='view-container'>
      <div className='absolute -top-2 -right-2'>
        <Ping />
      </div>

      <p className='view-text'>
        <span className='font-black'>Views: {totalViews}</span>
      </p>
    </div>
  );
};
export default View;
