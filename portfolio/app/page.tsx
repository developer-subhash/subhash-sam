import Contacts from "./components/Contacs";
import Header from "./components/Header";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <div className="m-1 text-sm md:text-base">
      <Header />
      <br /><br />
      <Profile />
      <br /><br /><br />
      <Contacts />
    </div>
  );
}
