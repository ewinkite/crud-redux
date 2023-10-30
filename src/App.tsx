import AppRouter from "./AppRouter";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";
import { useState, useEffect } from "react";

export interface props {
  items: {
    id: string;
    mainImg: string;
    tag: string;
    title: string;
    workTerm: string;
    value: string;
  }[];
}

function App() {
  const [items, setItems] = useState<any>([]);

  const itemObj = useEffect(() => {
    async function getItems() {
      const querySnapshot = await getDocs(
        query(collection(db, "posts"), orderBy("update", "desc"))
      );
      const itemList = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setItems(itemList);
    }
    getItems();
  }, [items]);

  return <AppRouter items={items} />;
}

export default App;
