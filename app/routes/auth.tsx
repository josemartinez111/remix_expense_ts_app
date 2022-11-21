import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import AuthForm from '~/components/auth/AuthForm';
import authStyles from '~/styles/auth.css';
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: authStyles }
];

export const meta: MetaFunction = () => ({
  title: 'Auth Page',
  description: 'Login page for the app',
});
// =========================================================

function AuthPage(): ReactElement {
  return <AuthForm />;
}

export default AuthPage;
// ########################################################
