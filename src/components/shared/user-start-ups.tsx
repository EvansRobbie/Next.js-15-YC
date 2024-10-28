import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "./start-up-card";


const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: unknown) => (
          // @ts-expect-error next-sanity is not typed
          <StartupCard key={startup._id} post={startup as StartupTypeCard} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
export default UserStartups;