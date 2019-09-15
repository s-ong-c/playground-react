import * as React from "react";
import styled from "styled-components";

const GithubUsernameBlock = styled.form`
  width: 400px;
  display: flex;
  align-items: center;
  height: 32px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 48px;
  input {
    flex: 1;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    font-size: 21px;
    height: 100%;
    margin-right: 1rem;
  }
  button {
    background: black;
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    height: 100%;
    font-weight: bold;
    &:hover {
      background: #495057;
    }
  }
`;
interface GithubUsernameProps {
  onSubmitUsername: (username: string) => void;
}
const { useState } = React;
const GithubUsername: React.SFC<GithubUsernameProps> = ({
  onSubmitUsername
}) => {
  const [input, setInput] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitUsername(input);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <GithubUsernameBlock onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={input}
        placeholder="Github 계정명을 입력하세요."
      />
      <button type="submit">조회</button>
    </GithubUsernameBlock>
  );
};

export default GithubUsername;
