type UserProfileProps = {
  name: string;
  role: string;
};

function UserProfile({name, role}: UserProfileProps) {
  return (
    <>
      <h2>{name} is {role}</h2>
    </>
  );
}

export default UserProfile;