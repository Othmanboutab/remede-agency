import Account from "../components/Account";
import Profile from "../components/Profile";
import { accountList } from "../config/account";

const Dashboard = () => {
  return (
    <div>
      <main className="main bg-dark">
        <Profile />
        <h2 className="sr-only">Accounts</h2>
        {accountList.map((account: Account, index: number) => (
          <Account
            key={index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </main>
    </div>
  );
};

export default Dashboard;
