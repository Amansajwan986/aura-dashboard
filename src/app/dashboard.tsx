"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CompanyLogo from '@/../public/asset/images/company-logo.png';
import AiLogo from '@/../public/asset/images/ai-active.png';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [campaigns, setCampaigns] = useState([])as any;
    const [loading, setLoading] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const engagementData = [
        { day: 'Mon', emailsSent: 420, meetings: 5, replies: 8 },
        { day: 'Tue', emailsSent: 380, meetings: 3, replies: 6 },
        { day: 'Wed', emailsSent: 390, meetings: 4, replies: 7 },
        { day: 'Thu', emailsSent: 480, meetings: 6, replies: 9 },
        { day: 'Fri', emailsSent: 520, meetings: 5, replies: 8 },
        { day: 'Sat', emailsSent: 290, meetings: 2, replies: 4 },
        { day: 'Sun', emailsSent: 180, meetings: 1, replies: 2 }
    ];

    const playbookData = [
        { name: 'SaaS Demo v2', value: 12 },
        { name: '', value: 8 },
        { name: 'Healthcare Connect', value: 14 },
        { name: '', value: 9 }
    ];

    const activityStream = [
        { type: 'success', icon: "https://img.icons8.com/material-rounded/32/339AF0/sparkling.png", text: 'Generated 42 drafts using Playbook v1.0', time: '2 min ago', tag: 'In Progress', color: 'blue' },
        { type: 'success', icon: "https://img.icons8.com/sf-regular-filled/48/16a34a/visible.png", text: 'Identified 6 positive replies from recent campaigns', time: '8 min ago  <img width="15" height="15" src="https://img.icons8.com/color/48/ok--v1.png" alt="logo"/>', tag: '', color: 'green' },
        { type: 'info', icon: "https://img.icons8.com/ios-glyphs/30/5C7CFA/good-quality--v1.png", text: 'Recommends adjusting Follow-up #2 timing', time: '1h min ago', tag: 'Needs Review', color: 'purple' },
        { type: 'warning', icon: "https://img.icons8.com/emoji/48/warning-emoji.png", text: 'Flagged 12 low-quality emails for your review', time: '2d min ago', tag: 'Action Required', color: 'yellow' },
        { type: 'error', icon: "https://img.icons8.com/material-rounded/32/f10000/clock.png", text: 'Paused sending due to inbox warming schedule', time: '1 hour ago', tag: '', color: 'red' }
    ];

    const insights = [
        {
            title: 'Follow-up #2 at Day 4 performs best',
            desc: 'Your Day 4 follow-up got 48% more replies. Consider moving other follow-ups earlier.',
            priority: 'High',
            color: 'blue'
        },
        {
            title: 'Subject lines under 7 words drive 18% more opens',
            desc: 'Short, direct subject lines are working better across all campaigns.',
            priority: 'High',
            color: 'blue'
        },
        {
            title: 'Tuesday 10 AM sends show highest engagement',
            desc: 'Emails sent on Tuesday mornings have a 27% higher open rate.',
            priority: 'Medium',
            color: 'purple'
        }
    ];

    const recentActivity = [
        { text: 'Email sent to John @Acme', time: '2h ago', color: 'green' },
        { text: 'Meeting booked with Alice @XYZ Corp', time: '3h ago', color: 'blue' },
        { text: 'Reply received from Sarah @TechCo', time: '4h ago', color: 'green' },
        { text: 'Campaign "SaaS Outreach" paused', time: '5h ago', color: 'orange' },
        { text: 'Email bounced: invalid@example.com', time: '6h ago', color: 'red' }
    ];

    const fetchCampaigns = async () => {
        setLoading(true);
        setTimeout(() => {
            setCampaigns([
                { id: 1, name: 'SaaS Outreach Q4', status: 'active', sent: 1240 },
                { id: 2, name: 'Enterprise Leads', status: 'paused', sent: 890 },
                { id: 3, name: 'Product Launch', status: 'active', sent: 2100 }
            ]);
            setLoading(false);
        }, 800);
    };

   const createCampaign = async (campaignData:any) => {
        const newCampaign = {
            id: campaigns.length + 1,
            ...campaignData,
            status: 'draft',
            sent: 0
        };
        setCampaigns([...campaigns, newCampaign]);
    };

    useEffect(() => {
        fetchCampaigns();
    }, []);

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'https://img.icons8.com/softteal-gradient/24/rubiks-cube.png' },
        { id: 'inbox', label: 'Inbox', icon: 'https://img.icons8.com/pulsar-line/48/ffffff/inbox.png' },
        { id: 'drafts', label: 'Drafts', icon: 'https://img.icons8.com/material-outlined/24/ffffff/open-envelope.png' },
        { id: 'campaigns', label: 'Campaigns', icon: 'https://img.icons8.com/ios-glyphs/30/ffffff/filled-sent.png' },
        { id: 'playbooks', label: 'Playbooks', icon: 'https://img.icons8.com/forma-light-filled/24/ffffff/open-book.png' },
        { id: 'settings', label: 'Settings', icon: 'https://img.icons8.com/ios-filled/50/ffffff/settings.png' }
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            <div className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white rounded-none lg:rounded-3xl flex flex-col shadow-xl transform transition-transform duration-300 ease-in-out ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}>
                <div className="p-4 sm:p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                                                 <Image src={CompanyLogo} alt="company-logo" />
                        </div>
                        <span className="font-semibold text-base sm:text-lg">TEST</span>
                    </div>
                    <button 
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden p-2 hover:bg-blue-600 rounded-lg"
                    >
                        <img width="20" height="20" src="https://img.icons8.com/material-rounded/24/ffffff/delete-sign.png" alt="close" />
                    </button>
                </div>

                <nav className="flex-1 px-3 py-4 sm:py-6 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveTab(item.id);
                                setSidebarOpen(false);
                            }}
                            className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all ${
                                activeTab === item.id 
                                    ? 'bg-[#f6f9ff] text-blue-600 shadow-md' 
                                    : 'text-blue-100 hover:bg-blue-500'
                            }`}
                        >
                            <img width="18" height="18" src={item.icon} alt="icon" />
                            <span className="font-medium text-sm sm:text-base">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-3 sm:p-4 border-blue-500">
                    <div className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#e2ecfe] rounded-full flex items-center justify-center flex-shrink-0">
                            <img width="18" height="18" src="https://img.icons8.com/material-rounded/32/339AF0/sparkling.png" alt="logo" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs sm:text-sm font-medium text-white truncate">AURA</p>
                            <p className="text-xs text-blue-200 truncate">Analyzing your leads</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-auto">
                <header className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white lg:bg-transparent top-0 z-10 shadow-sm lg:shadow-none">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <button 
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                            >
                                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/menu.png" alt="menu" />
                            </button>
                            <div className="min-w-0">
                                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 flex items-center truncate">
                                    Good morning, Admin <span className="ml-2 hidden sm:inline">👋</span>
                                </h1>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">Here{"'"}s how your AI-SDR performed in the last 7 days.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <button className="p-2 hover:bg-gray-100 rounded-3xl transition-colors relative bg-[#fff]">
                                <img width="18" height="18" className="sm:w-5 sm:h-5" src="https://img.icons8.com/material-sharp/24/bell.png" alt="bell" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <button className="hidden md:flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white hover:bg-gray-200 rounded-3xl transition-colors text-xs sm:text-sm">
                                <span className="font-medium text-black">Upload Leads</span>
                            </button>
                            <button className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-3xl shadow-md transition-colors">
                                <img width="14" height="14" className="sm:w-4 sm:h-4" src="https://img.icons8.com/ios/50/ffffff/plus.png" alt="plus" />
                                <span className="text-xs sm:text-sm font-medium hidden sm:inline">New Campaign</span>
                                <span className="text-xs sm:text-sm font-medium sm:hidden">New</span>
                            </button>
                        </div>
                    </div>
                </header>

                <main className="p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        {[
                            { label: 'Emails Sent', value: '12,340', change: '+8%', icon: 'https://img.icons8.com/external-creatype-glyph-colourcreatype/64/ffffff/external-arrow-essential-ui-v3-creatype-glyph-colourcreatype.png', bg: '#2563eb', color: '#467bee' },
                            { label: 'Replies', value: '1,240', change: '+12%', icon: 'https://img.icons8.com/32/ffffff/topic.png', bg: '#06b6d4', color: '#06b6d4' },
                            { label: 'Meetings Booked', value: '123', change: '+16%', icon: 'https://img.icons8.com/cotton/64/calendar--v2.png', bg: '#10b981', color: '#10b981' },
                            { label: 'Reply Rate', value: '10.1%', change: '+2.3%', icon: 'https://img.icons8.com/forma-thin-sharp/50/ffffff/pulse.png', bg: '#f59e0b', color: '#f59e0b' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#f6f9ff] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: stat.bg }}>
                                        <img width="20" height="20" className="sm:w-6 sm:h-6" src={stat.icon} alt="icon" />
                                    </div>
                                    <span className="text-green-600 text-xs sm:text-sm font-semibold bg-green-50 px-2 py-1 rounded">{stat.change}</span>
                                </div>
                                <p className="text-xs sm:text-sm mb-1" style={{ color: stat.color }}>{stat.label}</p>
                                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div className="bg-[#f6f9ff] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Engagement Over Time</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={engagementData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis dataKey="day" stroke="#9ca3af" style={{ fontSize: '11px' }} />
                                    <YAxis stroke="#9ca3af" style={{ fontSize: '11px' }} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#fff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                            fontSize: '12px'
                                        }}
                                    />
                                    <Legend wrapperStyle={{ fontSize: '11px' }} />
                                    <Line type="monotone" dataKey="emailsSent" stroke="#3b82f6" strokeWidth={2} name="Emails Sent" />
                                    <Line type="monotone" dataKey="meetings" stroke="#10b981" strokeWidth={2} name="Meetings" />
                                    <Line type="monotone" dataKey="replies" stroke="#06b6d4" strokeWidth={2} name="Replies" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-[#f6f9ff] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Top Performing Playbooks</h3>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={playbookData}>
                                    <defs>
                                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#1e40af" stopOpacity={1} />
                                            <stop offset="100%" stopColor="#3b82f6" stopOpacity={1} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis dataKey="name" stroke="#9ca3af" style={{ fontSize: '10px' }} />
                                    <YAxis stroke="#9ca3af" style={{ fontSize: '11px' }} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#fff',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                            fontSize: '12px'
                                        }}
                                    />
                                    <Bar dataKey="value" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-[#f6f9ff] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                                              <Image src={AiLogo} alt="logo" />
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">AI Activity Stream</h3>
                                    <p className="text-xs text-gray-500">AURA is working in the background</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full self-start sm:self-auto">Live</span>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                            {activityStream.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`p-3 sm:p-4 rounded-lg border transition-all hover:shadow-sm ${
                                        item.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                                        item.color === 'green' ? 'bg-green-50 border-green-200' :
                                        item.color === 'purple' ? 'bg-purple-50 border-purple-200' :
                                        item.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                                        'bg-red-50 border-red-200'
                                    }`}
                                >
                                    <div className="flex items-start space-x-2 sm:space-x-3">
                                        <div className={`mt-0.5 bg-white border w-7 h-7 sm:w-8 sm:h-8 rounded-md p-[2px] flex-shrink-0 justify-center flex
                                        items-center ${
                                            item.color === 'blue' ? 'text-blue-600' :
                                            item.color === 'green' ? 'text-green-600' :
                                            item.color === 'purple' ? 'text-purple-600' :
                                            item.color === 'yellow' ? 'text-yellow-600' :
                                            'text-red-600'
                                        }`}>
                                            <img width="24" height="24" className={item.color === 'red' || item.color === 'yellow' ? "p-[2px]" : ""} src={item.icon} alt="icon" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs sm:text-sm font-medium text-gray-900 break-words">{item.text}</p>
                                            <div className="flex items-center flex-wrap gap-2 mt-1">
                                                <div className="flex items-center gap-1">
                                                    <img width="13" height="13" src="https://img.icons8.com/material-rounded/24/6b7280/clock.png" alt="clock"/>
                                                    <span className="text-xs text-gray-500 flex gap-3" dangerouslySetInnerHTML={{ __html: item.time }}></span>
                                                </div>
                                                {item.tag && (
                                                    <span className={`text-xs px-2 py-0.5 rounded ${
                                                        item.color === 'blue' ? 'bg-blue-100 text-blue-700' : 
                                                        item.color === 'yellow' ? 'text-yellow-600 bg-yellow-100' : 
                                                        'bg-purple-100 text-purple-700'
                                                    }`}>
                                                        {item.tag}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                            <p className="text-xs sm:text-sm text-gray-700 flex flex-wrap items-start gap-2">
                                <span className="font-semibold flex items-center gap-2">
                                    <img width="15" height="10" src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/ff59bb/external-brain-anatomy-vitaliy-gorbachev-flat-vitaly-gorbachev.png" alt="brain" />
                                    AURA Summary:
                                </span>
                                <span>I{"'"}ve drafted 64 emails, sent 18, and detected 2 positive replies. Your outreach is on track.</span>
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#f9fbff] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm border border-gray-100 mb-6 sm:mb-8">
                        <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                                <img width="24" height="24" className="sm:w-7 sm:h-7" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/3B91FF/external-idea-interface-kiranshastry-solid-kiranshastry-1.png" alt="idea" />
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">AI Insights & Suggestions</h3>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            {insights.map((insight, idx) => (
                                <div key={idx} className="border border-gray-200 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                        <div className="flex-1">
                                            <h4 className="font-medium text-sm sm:text-base text-gray-900 mb-2">{insight.title}</h4>
                                            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{insight.desc}</p>
                                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                                                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-900 text-white text-xs sm:text-sm font-normal rounded-3xl transition-colors">
                                                    Apply to Playbook
                                                </button>
                                                <button className="px-4 py-2 border-blue-300 border bg-white hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-medium rounded-3xl transition-colors">
                                                    View Data
                                                </button>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap bg-blue-100 text-blue-700 self-start">
                                            {insight.priority}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#f6f9ff] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Recent Activity</h3>
                        <div className="space-y-2 sm:space-y-3">
                            {recentActivity.map((activity, idx) => (
                                <div key={idx} className="flex items-start sm:items-center gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                    <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1 sm:mt-0 ${
                                        activity.color === 'green' ? 'bg-green-500' :
                                        activity.color === 'blue' ? 'bg-blue-500' :
                                        activity.color === 'orange' ? 'bg-orange-500' :
                                        'bg-red-500'
                                    }`}></div>
                                    <span className="text-xs sm:text-sm text-gray-700 flex-1 leading-relaxed break-words">{activity.text}</span>
                                    <span className="text-xs text-gray-500 flex-shrink-0 whitespace-nowrap">{activity.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="">
                        <div className="bg-[#f6f9ff] rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-6 gap-4">
                            <div className="col-span-1 lg:col-span-5">
                                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-2">
                                    <span className="text-xs sm:text-sm font-medium text-gray-700">Monthly Email Usage</span>
                                    <span className="text-xs sm:text-sm text-gray-600">2,500 / 3,000</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-900 h-2 rounded-full" style={{ width: '83.3%' }}></div>
                                </div>
                            </div>
                            <div className="flex justify-end lg:justify-end items-start lg:items-center lg:col-span-1">
                                <button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-900 hover:from-blue-600 hover:to-blue-950 text-white text-sm font-medium rounded-3xl transition-all shadow-md">
                                    Upgrade Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;