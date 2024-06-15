import Image from "next/image";
import { outlineIcons, outlineIcons2, solidIcons } from "./icons";


export default function Home() {
  return (
    <div className="w-screen md:h-screen bg-[#ffee62] flex 2xl:justify-center">
      <div className="h-full flex md:flex-row flex-col overflow-hidden md:justify-between w-full 2xl:max-w-[80rem] 2xl:max-h-[50rem]">
        <div className="flex flex-col md:px-28 2xl:px-10 px-10 md:items-start items-center py-14 gap-y-3 md:justify-between h-full flex-wrap">
          <div className="flex flex-row items-center gap-2">
            <img className="min-w-[2.75rem] min-h-[2.75rem]" src="data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17ZM17.0805 19.4162C20.2138 14.9852 20.3521 12.2998 17.0805 7.55556C13.7465 12.401 14.1762 14.9694 17.0805 19.4162ZM15.5914 25.1878C16.0895 19.7838 14.8665 17.389 9.66113 14.9162C9.19652 20.7795 10.8529 22.7889 15.5914 25.1878ZM18.5883 25.1878C18.0903 19.7839 19.3132 17.3891 24.5186 14.9162C24.9832 20.7795 23.3269 22.7889 18.5883 25.1878Z' fill='black'/%3E%3C/svg%3E" alt="" />
            <span className="font-bold text-2xl">craftwork</span>
          </div>
          <div className="flex flex-col gap-4 flex-wrap md:w-[32rem] max-w-[32rem]">
            <h1 className="text-7xl font-semibold">Basil</h1>
            <p className="text-4xl text-[#665f27]">500 the most useful minimalistic icons for your design in 9 categories</p>
          </div>
          <div className="flex md:w-[32rem] w-full max-w-[32rem] flex-wrap">
            <p className="text-5xl font-semibold">Free Icons</p>
          </div>
        </div>
        <div className="flex flex-col gap-16 md:w-auto w-full justify-center items-center md:p-0 p-4" id="box">
          <div className="flex flex-row items-center gap-4 flex-wrap md:w-[40rem] max-w-[40rem]">
            {
              solidIcons.map((icon) => (
                <Image src={`icons/Solid/${icon}`} key={icon} alt="icon" width="45" height="45" className="select-none" />
              ))
            }
          </div>
          <div className="flex flex-row items-center gap-4 flex-wrap md:w-[40rem] max-w-[40rem]">
            {
              outlineIcons.map((icon) => (
                <Image src={`icons/Outline/${icon}`} key={icon} alt="icon" width="45" height="45" className="select-none" />
              ))
            }
          </div>
          <div className="flex flex-row items-center gap-4 flex-wrap md:w-[40rem] max-w-[40rem]">
            {
              outlineIcons2.map(icon => (
                <Image src={`icons/Outline/${icon}`} key={icon} alt="icon" width="45" height="45" className="select-none" />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
