export default function Profile({ user }) {
  return (
    <div>
      <h2>{user.nam}</h2> {/* BUG: 'nam' au lieu de 'name' */}
      <p>Age: {user.age}</p>
    </div>
  );
}