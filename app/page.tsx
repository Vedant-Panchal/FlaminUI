"use client"
import {
  Button,
  Radio,
  TextArea,
  Checkbox,
  Toggle,
  Input,
  Card,
  Accordion,
  AccordionItem,
} from "@lib/index";
import { buttonVariants } from "@components/Button/Variants";
import { Dot, Gift, MoveRight, Star, StarHalf } from "lucide-react";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownContent,
  DropdownLabel,
} from "@components/Dropdown/Dropdown";
import {
  CardHeader,
  CardTitle,
  CardFooter,
  CardButton,
  CardBody,
  CardContainer,
  CardIcon,
  CardImage,
  CardLink,
  CardCustomer,
  CardRating,
} from "@components/Card/Card";
import Avatar from "@components/Avatar/Avatar";
import {
  AccordionButton,
  AccordionContent,
} from "@components/Accordion/Accordion";
import { ComponentCard } from "@/components/ui/ComponentCards/ComponentCard";
import { ComponentShowcase } from "@/components/ui/ComponentCards/ComponentShowcase";
import Alert from "@/lib/components/Alert/Alert";
import AlertTitle from "@/lib/components/Alert/AlertTitle";
import AlertDescription from "@/lib/components/Alert/AlertDescription";

const Home = () => {
  return (
    <>
      <ComponentShowcase title="Button" className="mt-52">
        {buttonVariants.map((variant) => (
          <ComponentCard key={variant}>
            <Button variant={variant}>Button</Button>
          </ComponentCard>
        ))}
      </ComponentShowcase>
      <ComponentShowcase title="Textarea">
        <ComponentCard>
          <TextArea placeholder="Enter your text here..." variant="" />
        </ComponentCard>
        <ComponentCard>
          <TextArea placeholder="Enter your text here..." variant="info" />
        </ComponentCard>
        <ComponentCard>
          <TextArea placeholder="Enter your text here..." variant="success" />
        </ComponentCard>
        <ComponentCard>
          <TextArea placeholder="Enter your text here..." variant="error" />
        </ComponentCard>
        <ComponentCard>
          <TextArea placeholder="Enter your text here..." variant="warning" />
        </ComponentCard>
        <ComponentCard>
          <TextArea placeholder="Enter your text here..." variant="disabled" />
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Radio">
        <ComponentCard>
          <Radio label="Radio" />
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Checkbox">
        <ComponentCard>
          <Checkbox label="Checkbox" />
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Toggle">
        <ComponentCard>
          <Toggle label="Default Toggle" />
        </ComponentCard>
        <ComponentCard>
          <Toggle variant="squared" label="Squared Toggle" />
        </ComponentCard>
        <ComponentCard>
          <Toggle variant="squashed" label="Squashed Toggle" />
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase>
        <ComponentCard>
          <Input placeholder="Enter some text" type="email" />
        </ComponentCard>
        <ComponentCard>
          <Input placeholder="Enter some text" type="text" />
        </ComponentCard>
        <ComponentCard>
          <Input placeholder="Add a file" type="file" />
        </ComponentCard>
        <ComponentCard>
          <Input
            placeholder="Enter a number"
            type="number"
            min={0}
            max={1000}
            step={1}
          />
        </ComponentCard>
        <ComponentCard>
          <Input
            placeholder="Enter some text"
            type="password"
            showIcon={true}
            variant="error"
          />
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase>
        <ComponentCard>
          <Card>
            <CardContainer>
              <CardHeader>
                <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
              </CardHeader>
              <CardBody>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </CardBody>
            </CardContainer>
          </Card>
        </ComponentCard>
        <ComponentCard>
          <Card>
            <CardContainer>
              <CardHeader>
                <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
              </CardHeader>
              <CardBody>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </CardBody>
              <CardFooter>
                <CardButton>Read Less</CardButton>
              </CardFooter>
            </CardContainer>
          </Card>
        </ComponentCard>

        <Card className="overflow-hidden rounded-lg border border-white/20 shadow-lg">
          <CardContainer>
            <CardImage
              src={
                "https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={"error"}
              className="rounded-b-none"
            ></CardImage>
            <CardHeader className="mt-2 px-2">
              <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
            </CardHeader>
            <CardBody className="px-2">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </CardBody>
            <CardFooter className="px-2">
              <CardButton className="px-3 py-1 font-geist text-base">
                Read More <MoveRight className="w-5" />
              </CardButton>
            </CardFooter>
          </CardContainer>
        </Card>

        <ComponentCard>
          <Card>
            <CardContainer>
              <CardHeader>
                <CardIcon>
                  <Gift className="h-10 w-10" />
                </CardIcon>
                <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
              </CardHeader>
              <CardBody>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </CardBody>
              <CardFooter>
                <CardLink href={"/backgrounds"} className="cursor-pointer">See your guidelines</CardLink>
              </CardFooter>
            </CardContainer>
          </Card>
        </ComponentCard>
        <Card className="max-h-56 min-w-96 overflow-hidden rounded-lg border border-white/20 shadow-lg">
          <CardContainer className="flex h-full flex-row">
            <CardImage
              src="https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="error"
              className="w-5/12 flex-none rounded-b-none object-cover"
            />
            <div className="flex flex-grow flex-col">
              <CardHeader className="mt-2 px-2">
                <CardTitle className="text-lg font-medium">
                  Lorem ipsum dolor sit amet
                </CardTitle>
              </CardHeader>
              <CardBody className="overflow-hidden px-2">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </CardBody>
            </div>
          </CardContainer>
        </Card>
        <Card className="overflow-hidden rounded-lg border border-white/20 shadow-lg">
          <CardContainer>
            <CardImage
              src={
                "https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={"error"}
              className="h-52 min-w-80 rounded-b-none object-cover"
            ></CardImage>
            <CardHeader className="mt-2 px-2">
              <CardTitle className="font-bold">
                Lorem ipsum dolor sit amet ipsum dolor
              </CardTitle>
              <div className="flex flex-row">
                <CardIcon className="flex flex-row">
                  <Star className="mr-1 h-5 w-5 fill-yellow-200 text-yellow-200" />
                  <Star className="mr-1 h-5 w-5 fill-yellow-200 text-yellow-200" />
                  <Star className="mr-1 h-5 w-5 fill-yellow-200 text-yellow-200" />
                  <Star className="mr-1 h-5 w-5 fill-yellow-200 text-yellow-200" />
                  <StarHalf className="mr-1 h-5 w-5 fill-yellow-200 text-yellow-200" />
                </CardIcon>
                <CardRating>5.0</CardRating>
              </div>
            </CardHeader>
            <CardFooter className="mb-2 mt-6 flex items-center justify-between px-2">
              <h1 className="text-2xl font-bold text-white">$69.69</h1>
              <CardButton className="relative">Add to Cart</CardButton>
            </CardFooter>
          </CardContainer>
        </Card>
        <ComponentCard>
          <Card className="min-h-28 w-72 rounded-xl p-4 text-center text-white shadow-lg">
            <CardContainer>
              <CardIcon className="mb-6 flex flex-row-reverse text-white">
                <Dot className="-mx-1" />
                <Dot className="-mx-1" />
                <Dot className="-mx-1" />
              </CardIcon>
              <CardHeader className="flex flex-col items-center">
                <CardImage
                  src="https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Bonnie Green's profile picture"
                  className="mx-auto mb-4 h-24 w-24 rounded-full"
                />
                <CardTitle>Bonnie Green</CardTitle>
                <p className="text-gray-400">Visual Designer</p>
              </CardHeader>
              <CardFooter className="mt-10 flex justify-center space-x-4">
                <CardButton className="rounded-lg px-4 py-2">
                  Add friend
                </CardButton>
                <CardButton className="rounded-lg bg-[#FFF1F21A] px-4 py-2 text-white hover:bg-[#FFF1F21A]">
                  Message
                </CardButton>
              </CardFooter>
            </CardContainer>
          </Card>
        </ComponentCard>
        {/* <ComponentCard>
          <Card className="min-h-28 w-72 rounded-xl p-4 text-center text-white shadow-lg">
            <CardContainer>
              <CardIcon className="mb-6 flex flex-row-reverse text-white">
                <Dot className="-mx-1" />
                <Dot className="-mx-1" />
                <Dot className="-mx-1" />
              </CardIcon>
              <CardHeader className="flex flex-col items-center">
                <CardImage
                  src="https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Bonnie Green's profile picture"
                  className="mx-auto mb-4 h-24 w-24 rounded-full"
                />
                <CardTitle>Bonnie Green</CardTitle>
                <p className="text-gray-400">Visual Designer</p>
              </CardHeader>
              <CardFooter className="mt-10 flex justify-center space-x-4">
                <CardButton className="rounded-lg px-4 py-2">
                  Add friend
                </CardButton>
                <CardButton className="rounded-lg bg-[#FFF1F21A] px-4 py-2 text-white hover:bg-[#FFF1F21A]">
                  Message
                </CardButton>
              </CardFooter>
            </CardContainer>
          </Card>
        </ComponentCard> */}
        <ComponentCard>
          <Card className="min-h-90 w-[384px]">
            <CardHeader className="flex items-center justify-between p-2">
              <CardTitle className="items-start">Latest Customers</CardTitle>
              <CardLink href={"/backgrounds"} className="mr-1 items-end">
                View All
              </CardLink>
            </CardHeader>
            <CardBody>
              <CardCustomer
                imageSrc={
                  "https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                name={"Neil Sims"}
                email={"neilsims@email.com"}
              ></CardCustomer>
              <CardCustomer
                imageSrc={
                  "https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                name={"Neil Sims"}
                email={"neilsims@email.com"}
              ></CardCustomer>
              <CardCustomer
                imageSrc={
                  "https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                name={"Neil Sims"}
                email={"neilsims@email.com"}
              ></CardCustomer>
              <CardCustomer
                imageSrc={
                  "https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                name={"Neil Sims"}
                email={"neilsims@email.com"}
              ></CardCustomer>
              <CardCustomer
                imageSrc={
                  "https://images.unsplash.com/photo-1719221253506-57f70fadfd0d?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                name={"Neil Sims"}
                email={"neilsims@email.com"}
              ></CardCustomer>
            </CardBody>
          </Card>
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Dropdown Animation Default Item Animation Default Stagger Can be changed through prop">
        <ComponentCard>
          <Dropdown
            dropdownAnimation={"default"}
            itemAnimation={"default"}
            staggerItems={true}
          >
            <DropdownButton defaultText="Select an option" />
            <DropdownContent>
              <DropdownLabel>Options</DropdownLabel>
              <DropdownItem value="Option 1">Option 1</DropdownItem>
              <DropdownItem value="Option 2">Option 2</DropdownItem>
              <DropdownItem value="Option 3">Option 3</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Dropdown Animation Default Item Animation SlideUp Stagger Can be changed through prop">
        <ComponentCard>
          <Dropdown dropdownAnimation={"default"} itemAnimation={"slideUp"}>
            <DropdownButton defaultText="Select an option" />
            <DropdownContent>
              <DropdownLabel>Options</DropdownLabel>
              <DropdownItem value="Option 1">Option 1</DropdownItem>
              <DropdownItem value="Option 2">Option 2</DropdownItem>
              <DropdownItem value="Option 3">Option 3</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Dropdown Animation SlideUp Item Animation Default Stagger Can be changed through prop">
        <ComponentCard>
          <Dropdown
            dropdownAnimation={"slideUp"}
            itemAnimation={"default"}
            staggerItems={true}
          >
            <DropdownButton defaultText="Select an option" />
            <DropdownContent>
              <DropdownLabel>Options</DropdownLabel>
              <DropdownItem value="Option 1">Option 1</DropdownItem>
              <DropdownItem value="Option 2">Option 2</DropdownItem>
              <DropdownItem value="Option 3">Option 3</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Dropdown Animation SlideUp Item Animation SlideUp with stagger Stagger Can be changed through prop">
        <ComponentCard>
          <Dropdown
            dropdownAnimation={"default"}
            itemAnimation={"slideUp"}
            staggerItems={true}
          >
            <DropdownButton defaultText="Select an option" />
            <DropdownContent>
              <DropdownLabel>Options</DropdownLabel>
              <DropdownItem value="Option 1">Option 1</DropdownItem>
              <DropdownItem value="Option 2">Option 2</DropdownItem>
              <DropdownItem value="Option 3">Option 3</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Accordion">
        <ComponentCard>
          <Accordion
            className="w-[500px] gap-3"
            border={false}
            variant="rounded"
          >
            <AccordionItem index={0}>
              <AccordionButton>Accordion Item 1</AccordionButton>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At est
                blanditiis, optio repellendus consectetur possimus dolorem iusto
                pariatur soluta odit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem index={1}>
              <AccordionButton>Accordion Item 2</AccordionButton>
              <AccordionContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                explicabo nesciunt a dolor recusandae vero eligendi mollitia,
                beatae voluptatum amet temporibus! Earum corporis illo eos
                itaque enim pariatur, voluptatem aperiam porro temporibus
                praesentium quas rem odio mollitia a non! Consequatur laudantium
                facere incidunt neque, delectus nulla beatae quis optio
                eligendi!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem index={2}>
              <AccordionButton>Accordion Item 3</AccordionButton>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem index={3}>
              <AccordionButton>Accordion Item 4</AccordionButton>
              <AccordionContent>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                provident!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem index={4}>
              <AccordionButton>Accordion Item 5</AccordionButton>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore nihil ut earum fugiat vero odio impedit, itaque sunt
                nostrum recusandae aliquid quam sed optio mollitia.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Avatar">
        <ComponentCard>
          <Avatar />
        </ComponentCard>
        <ComponentCard>
          <Avatar
            isRounded={false}
            status="online"
            size={"xs"}
            location="top-right"
          />
        </ComponentCard>
        <ComponentCard>
          <Avatar status="online" size={"sm"} location="top-right" />
        </ComponentCard>
        <ComponentCard>
          <Avatar
            isRounded={false}
            status="online"
            size={"md"}
            location="bottom-right"
          />
        </ComponentCard>
        <ComponentCard>
          <Avatar status="online" size={"lg"} location="bottom-right" />
        </ComponentCard>
        <ComponentCard>
          <Avatar isRounded={false} status="offline" />
        </ComponentCard>
        <ComponentCard>
          <Avatar status="offline" className="bg-orange-500" />
        </ComponentCard>
        <ComponentCard>
          <Avatar
            alt="User Avatar"
            size="xs"
            status="online"
            location="bottom-right"
            isRounded={true}
          />
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Alert">
        <ComponentCard>
          <Alert dismissAfter={2000} >
            <AlertTitle>This is alert title!</AlertTitle>
            <AlertDescription>This is alert description!</AlertDescription>
          </Alert>
        </ComponentCard>
      </ComponentShowcase>
    </>
  );
};

export default Home;
