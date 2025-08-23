export default function Toast({ message, type = 'success', onClose, isVisible }) {
  if (!isVisible) return null;

  const styles = {
    success:
      "bg-green-500 border-green-600 dark:bg-green-600 dark:border-green-700",
    error: "bg-red-500 border-red-600 dark:bg-red-600 dark:border-red-700",
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`${styles[type]} text-white px-6 py-4 rounded-lg shadow-lg border-l-4 flex items-center space-x-3 min-w-80`}>
        <span className="text-xl">
          {type === 'success' && '✓'}
          {type === 'error' && '⚠️'}
        </span>
        <span className="flex-1">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-white hover:text-gray-200 dark:hover:text-gray-300 text-lg font-bold focus:outline-none"
        >
          ×
        </button>
      </div>
    </div>
  );
};