import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { features } from '@/lib/features';

export const PriceTable = () => {
  return (
    <div className="">
      <Table className="text-white bg-tableColor">
        <TableHeader>
          <TableRow className="border-[1px] border-lightBlue">
            <TableHead className=""></TableHead>
            <TableHead className="text-xl border-[1px] border-lightBlue">
              Sprint
            </TableHead>
            <TableHead className="text-xl border-x-[3px] border-t-[2px] border-CTAgreen">
              <div className="flex justify-between">
                <div>Pinnacle</div>
                <span className="bg-CTAgreen px-3 py-1 tracking-widest text-xs absolute right-0 top-[35px] rounded-bl-xl rounded-tl-xl">
                  POPULAR
                </span>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-lightBlue">
            <TableCell className="font-medium border-[1px] border-lightBlue">
              <span className="text-2xl"> Compare plans </span>
              <br />
              <span className="text-xs text-lightGrey"> What we offer? </span>
            </TableCell>
            <TableCell className="text-center border-[1px] border-lightBlue">
              <div>
                <div className="flex items-end gap-x-2">
                  <h2 className="text-5xl text-white dark:text-[#E9E9E9]  font-bold leading-none mb-4 mt-2">
                    ₹ 5699
                  </h2>
                  <h2 className="text-2xl text-[#858BA0] dark:text-[#909090]  font-bold leading-none mb-4 mt-2 line-through">
                    ₹ 6499
                  </h2>
                </div>
                <div className="w-full bg-lightGreen text-green px-3 py-2 rounded-lg shadow-sm">
                  <span className="font-semibold">Special Offer: ₹3704.35</span>
                  <div className="mt-1 text-xs">
                    Use coupon: <span className="font-bold">TUFPLUS</span>
                  </div>
                </div>
                <button className="flex justify-center items-center gap-x-2 border-2 rounded-md text-center py-2.5 w-4/5 border-red mt-2">
                  <span className="text-[16px] text-red font-semibold">
                    Start Your Journey
                  </span>
                </button>
              </div>
            </TableCell>
            <TableCell className="border-x-[3px] border-CTAgreen">
              <div>
                <div className="flex items-end gap-x-2 text-center">
                  <h2 className="text-5xl text-white dark:text-[#E9E9E9]  font-bold leading-none mb-4 mt-2 text-center">
                    ₹ 7599
                  </h2>
                  <h2 className="text-2xl text-[#858BA0] dark:text-[#909090]  font-bold leading-none mb-4 mt-2 line-through text-center">
                    ₹ 9999
                  </h2>
                </div>
                <div>
                  <div className="w-full text-center bg-lightGreen text-green px-3 py-2 rounded-lg shadow-sm">
                    <span className="font-semibold">
                      Special Offer: ₹4939.35
                    </span>
                    <div className="mt-1 text-xs">
                      Use coupon: <span className="font-bold">TUFPLUS</span>
                    </div>
                  </div>
                </div>
                <button className="flex justify-center items-center gap-x-2 border-2 rounded-md text-center py-2.5 w-4/5 bg-red border-red mt-2">
                  <span className="text-[16px] text-white font-semibold">
                    Start Your Journey
                  </span>
                </button>
              </div>
            </TableCell>
          </TableRow>
          {features.map((feature) => (
            <TableRow key={feature.key} className="border-lightBlue">
              <TableCell className="font-medium border-[1px] border-lightBlue">
                <span className="text-lg">{feature.title} </span>
                <br />
                <span className="text-xs text-lightGrey">
                  {feature.subTitle}
                </span>
              </TableCell>
              <TableCell className="border-[1px] border-lightBlue">
                {feature.sprint}
              </TableCell>
              <TableCell className="border-x-[3px] border-CTAgreen">
                {feature.pinnacle}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="font-medium border-[1px] border-lightBlue">
              <span className="text-lg"> Validity </span>
            </TableCell>
            <TableCell className="text-lg border-[1px] border-lightBlue">
              {' '}
              12 Months{' '}
            </TableCell>
            <TableCell className="text-lg border-x-[3px] border-b-[3px] border-CTAgreen">
              {' '}
              Lifetime{' '}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
