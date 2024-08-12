export const Footer = () => {
  return (
    <div className="flex justify-center p-10">
      <span className="flex title-font font-medium flex-col items-center md:justify-start md:items-start justify-center text-gray-900">
        <a className="flex items-center gap-2" href="/">
          <span className="font-amaranth text-red font-bold text-3xl">
            takeUforward
          </span>
        </a>
        <span className="text-sm mt-2 text-[#7a7a7a]">
          The best place to learn data Structures, algorithms, most asked coding
          interview questions. real interview experiences free of cost.
        </span>
        <div className="flex flex-row gap-x-2 items-center mt-4">
          <a
            aria-label="LinkedIn: https://www.linkedin.com/company/takeuforward/"
            className="p-2 rounded-full border-zinc-300 dark:border-[#f0f0f060] border-2 group hover:bg-red-600 hover:border-red-600 transition-all ease-in-out duration-300 cursor-pointer"
            href="https://www.linkedin.com/company/takeuforward/"
            target="_blank"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-white fill-[#7a7a7a]"
                d="M1.53956 3.06491C2.30569 3.06491 2.92677 2.43849 2.92677 1.66576C2.92677 0.893024 2.30569 0.266602 1.53956 0.266602C0.77342 0.266602 0.152344 0.893024 0.152344 1.66576C0.152344 2.43849 0.77342 3.06491 1.53956 3.06491Z"
                fill="#7A7A7A"
              ></path>
              <path
                className="group-hover:fill-white fill-[#7a7a7a]"
                d="M2.69555 3.99805H0.383544C0.255922 3.99805 0.152344 4.10252 0.152344 4.23124V11.227C0.152344 11.3558 0.255922 11.4602 0.383544 11.4602H2.69555C2.82317 11.4602 2.92675 11.3558 2.92675 11.227V4.23124C2.92675 4.10252 2.82317 3.99805 2.69555 3.99805Z"
                fill="#7A7A7A"
              ></path>
              <path
                className="group-hover:fill-white fill-[#7a7a7a]"
                d="M9.58396 3.67632C8.59581 3.33493 7.35981 3.63481 6.61858 4.17256C6.59314 4.07228 6.50251 3.99766 6.39477 3.99766H4.08276C3.95514 3.99766 3.85156 4.10213 3.85156 4.23085V11.2266C3.85156 11.3553 3.95514 11.4598 4.08276 11.4598H6.39477C6.5224 11.4598 6.62597 11.3553 6.62597 11.2266V6.19899C6.9996 5.87439 7.48096 5.77085 7.87492 5.93969C8.25687 6.10245 8.47558 6.49981 8.47558 7.02916V11.2266C8.47558 11.3553 8.57916 11.4598 8.70678 11.4598H11.0188C11.1464 11.4598 11.25 11.3553 11.25 11.2266V6.55951C11.2236 4.64314 10.3298 3.93377 9.58396 3.67632Z"
                fill="#7A7A7A"
              ></path>
            </svg>
          </a>
          <a
            aria-label="Twitter: https://bit.ly/32QbLD6"
            className="p-2 rounded-full border-zinc-300 dark:border-[#f0f0f060] border-2 group hover:bg-red-600 hover:border-red-600 transition-all ease-in-out duration-300 cursor-pointer"
            href="https://bit.ly/32QbLD6"
            target="_blank"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-white fill-[#7a7a7a]"
                d="M36.6526 3.80782H43.3995L28.6594 20.6548L46 43.5798H32.4225L21.7881 29.6759L9.61989 43.5798H2.86886L18.6349 25.56L2 3.80782H15.9222L25.5348 16.5165L36.6526 3.80782ZM34.2846 39.5414H38.0232L13.8908 7.63408H9.87892L34.2846 39.5414Z"
              ></path>
            </svg>
          </a>
          <a
            aria-label="Instagram: https://www.instagram.com/striver_79/"
            className="p-2 rounded-full border-zinc-300 dark:border-[#f0f0f060] border-2 group hover:bg-red-600 hover:border-red-600 transition-all ease-in-out duration-300 cursor-pointer"
            href="https://www.instagram.com/striver_79/"
            target="_blank"
          >
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-white fill-[#7a7a7a]"
                d="M8.35018 3.53564C8.7043 3.53564 8.99138 3.24609 8.99138 2.88892C8.99138 2.53174 8.7043 2.24219 8.35018 2.24219C7.99606 2.24219 7.70898 2.53174 7.70898 2.88892C7.70898 3.24609 7.99606 3.53564 8.35018 3.53564Z"
                fill="#7A7A7A"
              ></path>
              <path
                className="group-hover:fill-white fill-[#7a7a7a]"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.91113 5.6561C2.91113 7.14221 4.10937 8.35077 5.58278 8.35077C7.0562 8.35077 8.25443 7.14221 8.25443 5.6561C8.25443 4.16999 7.0562 2.96143 5.58278 2.96143C4.10937 2.96143 2.91113 4.16999 2.91113 5.6561ZM4.2463 5.65642C4.2463 4.91336 4.84542 4.30908 5.58213 4.30908C6.31883 4.30908 6.91795 4.91336 6.91795 5.65642C6.91795 6.39947 6.31883 7.00375 5.58213 7.00375C4.84542 7.00375 4.2463 6.39947 4.2463 5.65642Z"
                fill="#7A7A7A"
              ></path>
              <path
                className="group-hover:fill-white fill-[#7a7a7a]"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.91091 11.0454H8.25423C9.62746 11.0454 10.9259 9.73576 10.9259 8.35069V2.9613C10.9259 1.57622 9.62746 0.266602 8.25423 0.266602H2.91091C1.53768 0.266602 0.239258 1.57622 0.239258 2.9613V8.35069C0.239258 9.73576 1.53768 11.0454 2.91091 11.0454ZM1.57443 2.96159C1.57443 2.33171 2.28575 1.61426 2.91025 1.61426H8.25357C8.87807 1.61426 9.5894 2.33171 9.5894 2.96159V8.35094C9.5894 8.98082 8.87807 9.69827 8.25357 9.69827H2.91025C2.27373 9.69827 1.57443 8.99294 1.57443 8.35094V2.96159Z"
                fill="#7A7A7A"
              ></path>
            </svg>
          </a>
          <a
            aria-label="YouTube: https://www.youtube.com/channel/UCJskGeByzRRSvmOyZOz61ig"
            className="px-1.5 py-2 rounded-full border-zinc-300 dark:border-[#f0f0f060] border-2 group hover:bg-red-600 hover:border-red-600 transition-all ease-in-out duration-300 cursor-pointer"
            href="https://www.youtube.com/channel/UCJskGeByzRRSvmOyZOz61ig"
            target="_blank"
          >
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-white fill-[#7a7a7a]"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6882 0.379177C13.2514 0.529536 13.695 0.970198 13.8461 1.52867C14.1268 2.54799 14.1136 4.67319 14.1136 4.67319C14.1136 4.67319 14.1116 6.78668 13.8396 7.80535C13.6865 8.36317 13.2409 8.80318 12.6783 8.95289C11.6492 9.21976 7.53202 9.21521 7.53202 9.21521C7.53202 9.21521 3.426 9.21065 2.38635 8.93076C1.82249 8.7804 1.3789 8.33974 1.22775 7.78191C0.958311 6.77301 0.960938 4.64846 0.960938 4.64846C0.960938 4.64846 0.963568 2.53432 1.23498 1.51501C1.38745 0.95718 1.84352 0.506754 2.39555 0.357697C3.42534 0.0901752 7.54188 0.0947315 7.54188 0.0947315C7.54188 0.0947315 11.6591 0.0992879 12.6882 0.379177ZM6.22819 2.70183L6.2249 6.60728L9.6501 4.65781L6.22819 2.70183Z"
              ></path>
            </svg>
          </a>
        </div>
      </span>
    </div>
  );
};
