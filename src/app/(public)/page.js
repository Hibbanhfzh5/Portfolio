const ItemService = ({
  title,
  subTitle
}) => {
  return (
    <>
      <div className="w-[310px] bg-white p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105">
        <div className="flex justify-center">
          <img src="images/coding.png" alt="Service Image" />
        </div>
        <div className="text-center mt-4">
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
          <span className="text-[15px] text-gray-500">{subTitle}</span>
        </div>
      </div>
    </>
  );
}

export default function Dashboard() {
  const myService = [
    { title: 'Web Development', subTitle: 'Blog, E-commerce' },
    { title: 'UI/UX Design', subTitle: 'Mobile App, Website Design' },
    { title: 'Sound Design', subTitle: 'Voice Over, Beat Making' },
    { title: 'Game Design', subTitle: 'Character Design, Props & Objects' },
    { title: 'Photography', subTitle: 'Portrait, Product Photography' },
    { title: 'Advertising', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <>
      {/* Main Layout Background Gradient */}
      <div className="min-h-screen bg-gradient-to-r from-[#4A90E2] to-[#B3CDE0] p-10">
        {/* Dashboard Container */}
        <div className="flex w-full bg-white rounded-xl shadow-lg p-10">
          {/* Left Side: Profile Information */}
          <div className="flex-1">
            <div className="font-extrabold text-[48px] mt-10 text-gray-900">
              <div>Saya Hibban Hafizh M</div>
              <div>
                <span className="text-[#FF6F61]">Manajemen</span> Informatika
              </div>
            </div>
            <p className="text-gray-600 mt-3">Saya Mahasiswa LP3I semester 5 prodi Manajemen Informatika</p>
            <button className="mt-5 px-4 py-2 rounded-lg bg-[#FF6F61] text-white font-semibold">
              <span className="relative text-sm">Hear Me</span>
            </button>
          </div>
          {/* Right Side: Avatar */}
          {/* You can add an avatar image here if needed */}
        </div>

        {/* Services Section */}
        <div className="mt-20 text-center">
          <h2 className="text-[32px] font-bold text-gray-900">My Services</h2>
          <div className="flex justify-center text-gray-600 mt-4">
            <p className="w-1/2 text-center">TEST loremipsum loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum</p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-rows-2 grid-flow-col gap-6 mt-10">
          {myService.map((item, key) => (
            <ItemService
              key={key}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </div>
    </>
  );
}
