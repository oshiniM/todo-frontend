import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ArrowLeftIcon, ClockIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
//import VideoBackground from '../components/VideoBackground';
import ThemeToggle from '../components/ThemeToggle';

export default function Profile() {
  const { user } = useAuth();

  const stats = [
    { 
      label: 'Total Tasks', 
      value: 12,
      icon: ClockIcon,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'Completed', 
      value: 8,
      icon: CheckCircleIcon,
      color: 'from-green-500 to-green-600'
    },
    { 
      label: 'Pending', 
      value: 4,
      icon: XCircleIcon,
      color: 'from-amber-500 to-amber-600'
    },
  ];

  const recentActivity = [
    { action: 'Completed task', task: 'Update project documentation', time: '2 hours ago' },
    { action: 'Added new task', task: 'Review pull requests', time: '4 hours ago' },
    { action: 'Modified task', task: 'Prepare presentation slides', time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen relative bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* <VideoBackground url="https://assets.codepen.io/3364143/7btrrd.mp4" /> */}
      
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fadeIn relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold gradient-text">
            Profile Overview
          </h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link 
              to="/dashboard" 
              className="btn btn-secondary flex items-center gap-2"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Dashboard
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <div className="lg:col-span-1">
            <div className="card p-6 space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {user?.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{user?.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
                  Account Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600 dark:text-gray-400">Member Since</label>
                    <p className="text-gray-900 dark:text-white">March 2024</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 dark:text-gray-400">Last Active</label>
                    <p className="text-gray-900 dark:text-white">Today at 2:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold gradient-text">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</h3>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Recent Activity</h2>
              <div className="space-y-6">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 pb-6 last:pb-0 border-b last:border-0 border-gray-200 dark:border-gray-700"
                  >
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white font-medium">{activity.action}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{activity.task}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Chart */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Task Completion Rate</h2>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-primary-dark"
                  style={{ width: '75%' }}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                You've completed 75% of your tasks this month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}