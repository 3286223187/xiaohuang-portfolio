'use client'

export default function AboutSection() {
  return (
    <section className="w-full flex justify-center bg-[#F8F9FA] py-20">
      <div className="max-w-[1200px] w-full flex flex-col gap-16 px-6">

        {/* Title */}
        <h1 className="text-6xl text-center font-serif">I'm Stone</h1>

        {/* Layout */}
        <div className="flex gap-10 items-start">

          {/* Left */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h2 className="text-xl text-blue-500 mb-2">石头·运营助理</h2>
              <p className="text-gray-700">深圳大学·视觉传达设计</p>
              <p className="text-gray-700">来自广东顺德</p>
              <p className="text-gray-700">爱折腾的社交达人</p>
              <div className="border-t border-dashed mt-4" />
            </div>

            <div>
              <h3 className="text-lg mb-2">我的目标？</h3>
              <p className="text-blue-500">3个月内快速熟悉业务</p>
              <p className="text-gray-700">独立承担内容创作任务</p>
              <p className="text-gray-700">向各位前辈学习</p>
            </div>
          </div>

          {/* Center */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full border-2 border-dashed overflow-hidden">
                <img
                  src="/images/placeholders/avatar.jpg"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-6 right-6 bg-green-100 px-3 py-1 rounded-md text-sm border border-dashed">
                ENFP
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h3 className="text-lg mb-2">我能做什么？</h3>
              <p className="text-blue-500">新媒体运营</p>
              <p className="text-gray-700">数据分析</p>
              <p className="text-gray-700">团队协作</p>
              <div className="border-t border-dashed mt-4" />
            </div>

            <div>
              <h3 className="text-blue-500 mb-2">我喜欢的事。</h3>
              <p className="text-gray-700">徒步爱好者</p>
              <p className="text-gray-700">周末探店博主</p>
              <p className="text-gray-700">悬疑小说迷</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}