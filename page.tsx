export default function Page() {
  return (
    <main className="flex w-full min-w-[825px] justify-between font-serif relative">

      {/* LEFT COLUMN */}
      <section className="leftColumn fixed top-0 w-[45vw] h-screen bg-[#ad5d5f] overflow-hidden">
        <img
          src="/your-bg.jpg"
          alt="Background"
          className="h-[170vh] w-full object-cover opacity-60"
        />
      </section>

      {/* LOGO */}
      <img
        id="logo"
        src="/logo.png"
        alt="Logo"
        className="fixed top-0 right-0 w-[140px] z-10"
      />

      {/* FORM CONTAINER */}
      <div
        id="formContainer"
        className="relative left-[25px] w-[35%] flex flex-col items-center justify-center z-20"
      >
        <form className="ml-5 w-full">
          <div className="form-card bg-white p-5 rounded-xl shadow-2xl w-[80%] text-center">

            <h1 className="text-[#333] text-[28px] font-bold mb-2">Form Title</h1>
            <p className="subtitle text-[#666] text-sm mb-6">
              Enter the required information below
            </p>

            <div id="fields" className="flex flex-col gap-3">
              <aside className="flex justify-evenly w-full">
                <div className="flex flex-col justify-center m-[2%]">
                  <label className="text-white italic font-bold text-[16px]">
                    Field 1
                  </label>
                  <input
                    type="text"
                    className="input p-2 rounded-md border-2 border-white bg-white/70 outline outline-lightgreen focus:border-lightgreen"
                    placeholder="Enter text"
                  />
                </div>

                <div className="flex flex-col justify-center m-[2%]">
                  <label className="text-white italic font-bold text-[16px]">
                    Field 2
                  </label>
                  <textarea
                    className="input p-2 rounded-md border-2 border-white bg-white/70 outline outline-lightgreen focus:border-lightgreen h-[70px]"
                    placeholder="Type something"
                  />
                </div>
              </aside>
            </div>

            <div className="btnContainer flex flex-col items-center mt-4">
              <button
                className="btn w-[70%] bg-gradient-to-br from-[#c40b11] to-[#3c3b3d] text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        <footer className="text-right text-[#c40b11] w-full mt-4">
          © 2025 CeviMed
        </footer>
      </div>

      {/* RIGHT RESULTS CONTAINER */}
      <div className="container min-w-[400px] pr-[25px] flex flex-col items-end z-20">
        <div className="results flex-col hidden" id="results">
          {/* SECTION CARD */}
          <div className="data-section bg-white rounded-xl shadow-md w-[80%] mb-3">
            <div className="section-header flex justify-center items-center border-b-[2px] border-gray-200 pb-3 mb-4 cursor-pointer">
              <h3 className="section-title text-[22px] font-bold text-[#333]">
                Result Section
              </h3>
              <span className="badge bg-gradient-to-br from-[#c40b11] to-[#8a7d7d] text-white px-4 py-1 rounded-full ml-3 text-[20px] font-semibold">
                4
              </span>
            </div>

            <div className="data-item bg-[#f8f9fa] border-l-4 border-[#c40b11] p-4 rounded-md ml-6 max-h-[200px] overflow-y-scroll">
              <div className="data-row w-full">
                <div className="data-label font-semibold text-[#555] text-sm">
                  Example:
                </div>
                <div className="data-value text-[#333] text-sm">
                  Value example shown here
                </div>
              </div>
            </div>
          </div>

          <div className="error hidden bg-[#fee] border-l-4 border-[#f44] p-4 rounded-md mt-4 text-[#c33]">
            Error message here
          </div>
        </div>
      </div>

    </main>
  );
}
