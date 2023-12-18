import Account from "../components/Account";
import Profile from "../components/Profile";

const Dashboard = () => {
  const accountArray = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];
  return (
    <div>
      <main className="main bg-dark">
        <Profile />
        <h2 className="sr-only">Accounts</h2>
        {accountArray.map((account: any, index: number) => (
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
