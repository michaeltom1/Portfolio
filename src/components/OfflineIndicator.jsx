import { useState, useEffect } from "react";
export default function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  // import { LuX } from "react-icons/lu";
  // const [close, closeMenu] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOffline) {
    return null;
  } else {
    console.log("Offline");
  }

  // return (
  //   <div
  //     className={`flex items-center gap-4 fixed bottom-4 right-4 rounded bg-light-job p-2 text-white ${
  //       close && "hidden"
  //     }`}
  //   >
  //     You are offline <LuX onClick={() => closeMenu(true)} />
  //   </div>
  // );
}
