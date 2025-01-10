import React, { useState } from "react";
import { Scroll, Feather } from "lucide-react";
import si_bac from "../../public/si_bac.jpeg";
function Signup() {
  const [isUnrolled, setIsUnrolled] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => setIsUnrolled(true)}
          className={`mx-auto mb-4 flex items-center gap-2 bg-amber-800 text-amber-100 px-6 py-3 rounded-full transform transition-all duration-700 hover:bg-amber-900 ${isUnrolled ? "opacity-0" : ""}`}
        >
          <Scroll className="w-5 h-5" />
          <span>Register</span>
        </button>

        <div className="relative">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%+2rem)] h-8 bg-gradient-to-b from-amber-900 to-amber-800 rounded-full shadow-lg transition-all duration-2000 transform origin-bottom
              ${isUnrolled ? "scale-x-100" : "scale-x-0"}`}
          >
            <div className="absolute -left-4 -top-1 w-8 h-10 bg-amber-900 rounded-full"></div>
            <div className="absolute -right-4 -top-1 w-8 h-10 bg-amber-900 rounded-full"></div>
          </div>

          {/* Main Scroll Content with Rolling Animation */}
          <div
            className={`mt-4 bg-amber-100/90 bg-blend-overlay rounded-lg transition-all duration-[1000ms] ease-out overflow-hidden transform origin-top
    ${isUnrolled ? "max-h-[600px] opacity-100 scroll-shadow translate-y-0" : "max-h-0 opacity-0 -translate-y-full"}`}
            style={{ backgroundImage: `url(${si_bac})` }}
          >
            <div
              className={`p-8 transition-all duration-1000 delay-1000 transform ${isUnrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            >
              <div className="flex items-center justify-center mb-6">
                <Feather className="w-8 h-8 text-amber-800" />
              </div>

              <h2 className="text-2xl font-serif text-center text-amber-900 mb-6">
                Register
              </h2>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-amber-900 font-serif">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-amber-50/80 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    placeholder="Enter thy name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-amber-900 font-serif">
                    {" "}
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-amber-50/80 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    placeholder="abc@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-amber-900 font-serif">
                    {" "}
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg bg-amber-50/80 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-800 text-amber-100 py-3 rounded-lg mt-6 hover:bg-amber-900 transition-colors font-serif"
                >
                  Sign the Scroll
                </button>
              </form>

              <div className="mt-6 text-center text-amber-800 text-sm font-serif">
                Already have a scroll?{" "}
                <a href="#" className="underline hover:text-amber-900">
                  Login here
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Scroll Rod */}
          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%+2rem)] h-8 bg-gradient-to-b from-amber-900 to-amber-800 rounded-full shadow-lg transition-all duration-1000 transform origin-top delay-500
              ${isUnrolled ? "scale-x-100 translate-y-4" : "scale-x-0 translate-y-0"}`}
          >
            <div className="absolute -left-4 -bottom-1 w-8 h-10 bg-amber-900 rounded-full"></div>
            <div className="absolute -right-4 -bottom-1 w-8 h-10 bg-amber-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
