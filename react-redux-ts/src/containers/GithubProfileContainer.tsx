import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import GithubUsername from "../components/GithubProfile/GithubUsername";
import { RootState } from "../modules";
import { getUserProfileAsync } from "../modules/github";
import GithubProfileInfo from "../components/GithubProfile/GithubProfileInfo";
interface GithubProfileContainerProps {}

const GithubProfileContainer: React.SFC<
  GithubProfileContainerProps
> = props => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.github.userProfile
  );
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileAsync.request(username));
  };

  return (
    <>
      <GithubUsername onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: "center" }}>로딩중..</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
      {data && (
        <GithubProfileInfo
          bio={data.bio}
          blog={data.blog}
          name={data.name}
          thumbnail={data.avatar_url}
        />
      )}
    </>
  );
};

export default GithubProfileContainer;
