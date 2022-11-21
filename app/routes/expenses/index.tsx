import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import ExpensesList from '~/components/expenses/ExpensesList';
import { DUMMY_EXPENSE } from '~/data/Dummy.data';
// =========================================================

/** default page for the `/expenses` route */
// link to the dynamic route for notesId
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '' }];
};

export const meta: MetaFunction = () => ({
  title: 'Expense Page',
  description: 'Main expense page for the app',
});
// =========================================================

function ExpensesPage(): ReactElement {
  return <ExpensesList expenses={DUMMY_EXPENSE} />;
}

export default ExpensesPage;
// ########################################################
