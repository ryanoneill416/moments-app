import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {
    console.log(err);
  }
};

export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // Profile clicked
      //Update foll count and set foll id
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id
      }
    : profile.is_owner
    ? //This is profile of user
      // update following count
      { ...profile, following_count: profile.following_count + 1 }
    : //Not profile use clicked on
      // the user owns, return unchanged
      profile;
};
