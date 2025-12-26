"use client";

import Header from "@/components/header";
import Navigation from "@/components/navigation";

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      {/* Header */}
      <Header />

      <div className="flex">
        <Navigation active="luggage" />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Luggage
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Manage your luggage with ease. This is a temporary page to show successful login.
          </p>
        </main>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 ml-3">
              Quick Start
            </h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Get started with your dashboard. This is a temporary page to show successful login.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 ml-3">
              Features
            </h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Explore all the amazing features available in your application.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 ml-3">
              Settings
            </h3>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Customize your experience with various settings and preferences.
          </p>
        </div>
      </div>

      {/* Status Section */}
      <div className="mt-8 bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 border border-zinc-200 dark:border-zinc-700">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Application Status
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-zinc-600 dark:text-zinc-400">System Online</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-zinc-600 dark:text-zinc-400">Authentication Active</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-zinc-600 dark:text-zinc-400">Temporary Page</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-zinc-500 dark:text-zinc-500 text-sm">
          This is a temporary home page. Build your actual application content here.
        </p>
      </div>
    </div>
  );
}