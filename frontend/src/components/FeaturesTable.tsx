import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { GreenTick } from './GreenTick';
import { RedTick } from './RedTick';

export const FeaturesTable = () => {
  const upcomingFeatures = [
    {
      key: 1,
      title: 'Core Subjects + Quiz',
      sprint: <GreenTick />,
      pinnacle: <GreenTick />,
    },
    {
      key: 2,
      title: 'OOPS (Taught by Striver) + Quiz',
      sprint: <GreenTick />,
      pinnacle: <GreenTick />,
    },
    {
      key: 3,
      title: 'Resume Generator (Template)',
      sprint: <RedTick />,
      pinnacle: <GreenTick />,
    },
    {
      key: 4,
      title: 'AI Video Summariser',
      sprint: <RedTick />,
      pinnacle: <GreenTick />,
    },
    {
      key: 5,
      title: 'AI Common Doubts',
      sprint: <RedTick />,
      pinnacle: <GreenTick />,
    },
    {
      key: 6,
      title: '⁠SDE Sheet, 79 Sheet in Plus experience',
      sprint: <GreenTick />,
      pinnacle: <GreenTick />,
    },
    {
      key: 7,
      title: 'AI Problem Finder for Concepts',
      sprint: <RedTick />,
      pinnacle: <GreenTick />,
    },
    {
      key: 8,
      title: 'Custom test case generator',
      sprint: <RedTick />,
      pinnacle: <GreenTick />,
    },
  ];

  return (
    <Table className="text-white bg-tableColor mb-10">
      <TableHeader>
        <TableRow className="border-[1px] border-lightBlue">
          <TableHead className=""></TableHead>
          <TableHead className="text-xl border-[1px] border-lightBlue">
            Sprint
          </TableHead>
          <TableHead className="text-xl">
            <div className="flex justify-between">
              <div>Pinnacle</div>
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {upcomingFeatures.map((feature) => (
          <TableRow key={feature.key} className="border-lightBlue">
            <TableCell className="font-medium border-[1px] border-lightBlue">
              <span className="text-lg">{feature.title} </span>
            </TableCell>
            <TableCell className="border-[1px] border-lightBlue">
              {feature.sprint}
            </TableCell>
            <TableCell className="border-[1px] border-lightBlue">
              {feature.pinnacle}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
