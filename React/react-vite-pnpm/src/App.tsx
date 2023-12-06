import { AuthProvider } from "@/components/AuthProvider";
import { Screens } from "@/components/Screens";
import { firestore } from "./firebase";

const App = () => {
  console.log(firestore);
  return (
    <>
      <AuthProvider>
        <Screens />
      </AuthProvider>
    </>
  );
};

export default App;
