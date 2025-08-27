import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Users, TrendingUp, Award, ChevronUp, ChevronDown, MessageCircle, Share2, Bookmark } from 'lucide-react';

const LandingPage: React.FC = () => {
  const samplePosts = [
    {
      id: 1,
      title: "What's the best programming language to learn in 2025?",
      author: "u/techexplorer",
      community: "r/programming",
      upvotes: 1247,
      comments: 89,
      timeAgo: "4h",
      content: "I'm looking to switch careers into tech and wondering what language would give me the best opportunities..."
    },
    {
      id: 2,
      title: "Just launched my first startup! Here's what I learned",
      author: "u/entrepreneur2025",
      community: "r/startups",
      upvotes: 892,
      comments: 156,
      timeAgo: "7h",
      content: "After 2 years of development, we finally launched our SaaS platform. The journey was incredible..."
    },
    {
      id: 3,
      title: "The future of remote work: A comprehensive analysis",
      author: "u/workfromhome",
      community: "r/remotework",
      upvotes: 2156,
      comments: 234,
      timeAgo: "12h",
      content: "Based on recent studies and trends, here's my take on where remote work is heading..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation variant="light" />
      
      {/* Hero Section */}
      <section className="relative px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Dive into anything with
                <span className="text-orange-500"> networq</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join millions of people sharing knowledge, experiences, and passions in communities you'll love. From breaking news to the latest memes, networq has it all.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Link 
                  to="/signup"
                  className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Join networq</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/login"
                  className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-orange-50"
                >
                  Sign In
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 text-gray-600">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50M+</div>
                  <div className="text-sm">Daily Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100K+</div>
                  <div className="text-sm">Communities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1B+</div>
                  <div className="text-sm">Posts</div>
                </div>
              </div>
            </div>

            {/* Sample Posts Preview */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                  Trending on networq
                </h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {samplePosts.map((post) => (
                  <div key={post.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-3">
                      <div className="flex flex-col items-center space-y-1">
                        <button className="p-1 hover:bg-gray-200 rounded">
                          <ChevronUp className="w-4 h-4 text-gray-400" />
                        </button>
                        <span className="text-xs font-semibold text-gray-600">{post.upvotes}</span>
                        <button className="p-1 hover:bg-gray-200 rounded">
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                          <span className="font-medium text-gray-700">{post.community}</span>
                          <span>•</span>
                          <span>Posted by {post.author}</span>
                          <span>•</span>
                          <span>{post.timeAgo} ago</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.content}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-gray-700">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments} comments</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-gray-700">
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-gray-700">
                            <Bookmark className="w-4 h-4" />
                            <span>Save</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why millions choose networq
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover communities, share your thoughts, and connect with people who share your interests.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rich Discussions</h3>
              <p className="text-gray-600 leading-relaxed">
                Engage in meaningful conversations with threaded comments, voting, and real-time updates across thousands of communities.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vibrant Communities</h3>
              <p className="text-gray-600 leading-relaxed">
                Join communities that match your interests, from technology and science to hobbies and entertainment.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Content</h3>
              <p className="text-gray-600 leading-relaxed">
                Community-driven moderation and voting ensures the best content rises to the top while maintaining quality discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to join the conversation?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Become part of the networq community and start sharing your voice with the world.
          </p>
          <Link 
            to="/signup"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-orange-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Join networq Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageSquare className="w-6 h-6 text-orange-400" />
            <span className="text-xl font-bold text-white">networq</span>
          </div>
          <p className="text-gray-400">
            © 2025 networq. All rights reserved. Connecting communities worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;