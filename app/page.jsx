import RegisterForm from "../components/RegisterForm";
import { getUserFromCookie } from "../lib/getUser";
import Dashboard from "../components/Dashboard";

// const response = await fetch('http://localhost:3000/api/users/create', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ username: 'Test User', email: 'testuser@example.com' }),
// });

// const data = await response.json();
// console.log(data);

export default async function Page() {
  const user = await getUserFromCookie();

  return (
    <>
      {user && <Dashboard user={user} />}
      {!user && (
        <>
          <p className="text-center text-2xl text-gray-600 mb-5">
            Don&rsquo;t have an account? <strong>Create One</strong>
          </p>
          <RegisterForm />
        </>
      )}
    </>
  );
}
