import styles from "./TabWrapper.module.css";

const TabsWrapper = () => {
  return (
    <div>
      <div class="border-b border-gray-200">
        <nav class="-mb-0.5 flex space-x-6" aria-label="Tabs" role="tablist">
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 focus:border-purple-600 text-lg whitespace-nowrap text-gray-800 font-bold focus:outline-none focus:text-purple-800 disabled:opacity-50 disabled:pointer-events-none active"
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            General
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 focus:border-purple-600 text-lg whitespace-nowrap text-gray-800 font-bold focus:outline-none focus:text-purple-800 disabled:opacity-50 disabled:pointer-events-none active"
            id="horizontal-alignment-item-2"
            data-hs-tab="#horizontal-alignment-2"
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            Display
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 focus:border-purple-600 text-lg whitespace-nowrap text-gray-800 font-bold focus:outline-none focus:text-purple-800 disabled:opacity-50 disabled:pointer-events-none active"
            id="horizontal-alignment-item-3"
            data-hs-tab="#horizontal-alignment-3"
            aria-controls="horizontal-alignment-3"
            role="tab"
          >
            Advanced
          </button>
        </nav>
      </div>

      <div class="mt-3">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
        >
          <div className={styles.inputBox}>
            <label htmlFor="projectname" className="font-bold text-gray-900">
              Chatbot Name
            </label>
            <input
              type="text"
              id="projectname"
              className={styles.searchInput}
              // value={searchUserInput}
              // onChange={(e) => dispatch(handleSearchUserInput(e.target.value))}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="projectname" className="font-bold text-gray-900">
              Welcome Message
            </label>
            <input
              type="text"
              id="projectname"
              className={styles.searchInput}
              // value={searchUserInput}
              // onChange={(e) => dispatch(handleSearchUserInput(e.target.value))}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="projectname" className="font-bold text-gray-900">
              Input Placeholder
            </label>
            <input
              type="text"
              id="projectname"
              className={styles.searchInput}
              // value={searchUserInput}
              // onChange={(e) => dispatch(handleSearchUserInput(e.target.value))}
            />
          </div>
        </div>
        <div
          id="horizontal-alignment-2"
          class="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2"
        >
          <p class="text-gray-500">
            This is the <em class="font-semibold text-gray-800">second</em>
            item's tab body.
          </p>
        </div>
        <div
          id="horizontal-alignment-3"
          class="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-3"
        >
          <p class="text-gray-500">
            This is the <em class="font-semibold text-gray-800">third</em>
            item's tab body.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabsWrapper;
