import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
// import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';

// type isCheckedType = {
//   isChecked: boolean;
// };

export const Dashboard = () => {
  // const [isChecked, setChecked] = useState<boolean>();
  const [bannerData, setBannerData] = useState({
    description: '',
    duration: 0,
    link: '',
    // isVisible: isChecked,
  });
  console.log(bannerData);

  // const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // setIsChecked(event.target.checked);
  //   setBannerData({
  //     ...bannerData,
  //     isVisible: event.target.checked,
  //   });
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setBannerData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <div className="flex flex-col gap-6 p-10  min-h-screen">
      <div className="grid gap-6 grid-cols-3">
        <Card className="">
          <CardHeader>
            <CardTitle>Update Site Banner</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="banner-description">Banner Description</Label>
              <Textarea
                id="banner-description"
                placeholder="Enter banner description"
                rows={3}
                value={bannerData.description}
                onChange={(e) =>
                  setBannerData({ ...bannerData, description: e.target.value })
                }
              />
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="banner-duration">
                Banner Duration (in hours)
              </Label>
              <Input
                type="text"
                id="banner-duration"
                placeholder="Enter banner duration"
                value={bannerData.duration}
                onChange={(e) =>
                  setBannerData({
                    ...bannerData,
                    duration: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="banner-link">Banner Link</Label>
              <Input
                type="text"
                id="banner-link"
                placeholder="Enter banner link"
                value={bannerData.link}
                onChange={(e) =>
                  setBannerData({ ...bannerData, link: e.target.value })
                }
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="banner-visibility">Visibility</Label>
              <div>
                {/* <Switch
                  id="banner-visibility"
                  className="data-[state=checked]:bg-green data-[state=unchecked]:bg-red"
                  checked={bannerData.isVisible}
                  // onChange={(e) =>
                  //   setBannerData({
                  //     ...bannerData,
                  //     isVisible: e.target.checked,
                  //   })
                  // }
                  // checked={bannerData.isVisible}
                  // onChange={handleSwitchChange}
                  onCheckedChange={setChecked}
                /> */}
                <RadioGroup
                // onChange={(e) => {
                //   setBannerData({
                //     ...bannerData,
                //     isVisible: e.target.checked,
                //   });
                // }}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ture" id="r1" />
                    <Label htmlFor="r1">True</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id="r2" />
                    <Label htmlFor="r2">False</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <Button className="bg-grey text-pureWhite">Update Banner</Button>
          </CardContent>
        </Card>
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Banner Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-red items-center justify-center flex">
                <div className="text-white text-md bg-red text-center p-2 tracking-widest">
                  {bannerData.description}
                  <span className="underline underline-offset-4 font-bold">
                    <a href={bannerData.link} target="_blank">
                      Buy Today
                    </a>
                  </span>
                  <br />
                  <span className="font-bold text-xl">
                    Ends in {bannerData.duration}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
