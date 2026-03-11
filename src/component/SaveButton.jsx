import useOnlineStatus from "../hooks/useOnlineStatus";

const SaveButton = () => {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <>
      <button
        className="border border-gray-400 px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!isOnline}
        onClick={handleSaveClick}
      >
        {isOnline ? "Save progress" : "Reconnecting..."}
      </button>
    </>
  );
};

export default SaveButton;
