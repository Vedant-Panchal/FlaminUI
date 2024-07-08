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
import { Gift, MoveRight } from "lucide-react";
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
} from "@components/Card/Card";
import Avatar from "@components/Avatar/Avatar";
import {
  AccordionButton,
  AccordionContent,
} from "@components/Accordion/Accordion";
import { ComponentShowcase } from "../ui/ComponentCards/ComponentShowcase";
import { ComponentCard } from "../ui/ComponentCards/ComponentCard";

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
                <CardLink href={"/backgrounds"}>See your guidelines</CardLink>
              </CardFooter>
            </CardContainer>
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
    </>
  );
};

export default Home;
