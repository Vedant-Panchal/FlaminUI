"use client";
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
} from "@components/Card/Card";
import Avatar from "@components/Avatar/Avatar";
import {
  AccordionButton,
  AccordionContent,
} from "@components/Accordion/Accordion";
import { ComponentCard } from "@/components/ui/ComponentCards/ComponentCard";
import { ComponentShowcase } from "@/components/ui/ComponentCards/ComponentShowcase";
import { CardCustomer } from "@/lib/components/Card/CardCustomer";
import { CardRating } from "@/lib/components/Card/CardRating";
import Alert from "@/lib/components/Alert/Alert";
import AlertTitle from "@/lib/components/Alert/AlertTitle";
import AlertDescription from "@/lib/components/Alert/AlertDescription";
import CodePreview from "@/lib/components/CodePreview/CodePreview";

const Home = () => {
  const componentCode = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vero at itaque vel nostrum deleniti repellat vitae minus magni molestias, nam accusamus. Aut eaque consectetur debitis distinctio magni beatae itaque.
  Aspernatur, amet enim. Veritatis vero debitis nemo incidunt rerum provident iste nam, illum atque iure, recusandae reiciendis in, porro soluta veniam harum tenetur eos modi facere ea temporibus laudantium magnam.
  Nihil magni porro qui eligendi, consequuntur eos nemo provident. Id, vitae! Numquam quasi nisi nihil dicta id! Nisi pariatur suscipit debitis tempora qui odio, sequi cum magni, animi illum ad?
  Quasi itaque sapiente earum maiores corrupti cumque quaerat doloremque! Quasi sed et accusantium nobis a odio praesentium molestiae, sit vero eos nostrum, error voluptatum asperiores ab, laboriosam ipsam labore necessitatibus.
  Minus numquam incidunt necessitatibus dolorum, laboriosam eligendi ratione cum tempora. Voluptatibus explicabo provident, quasi non doloribus asperiores omnis ducimus rem animi. Ullam saepe temporibus quam omnis nisi voluptates ipsum est?
  Saepe soluta harum dolores maxime non! Odio vitae illum maxime molestias quasi reiciendis aut temporibus dignissimos neque accusantium, beatae omnis expedita ratione tempore adipisci labore quaerat! Delectus aut ducimus asperiores!
  Unde incidunt possimus totam. Natus quae voluptatem soluta consequatur deserunt placeat, laboriosam totam enim veniam, mollitia earum ab aliquam. Dolorem dicta cum optio molestias incidunt eveniet. Error doloribus ullam quisquam?
  Magni quisquam natus quasi officia voluptates, fuga perferendis iste, dolorum consequuntur itaque suscipit quod dolores accusamus saepe quaerat quas quia aperiam quae molestias eaque explicabo cumque ea! Quod, sapiente error.
  Nisi vero quibusdam animi iusto, esse dolor error fugit sunt ipsa facere voluptatum modi facilis, culpa nihil distinctio fuga quaerat accusamus quis illo recusandae aperiam. Deleniti, perspiciatis sapiente! Explicabo, ullam.
  Accusantium asperiores, impedit aspernatur esse in provident natus? Repudiandae, iusto deserunt molestiae doloremque culpa enim maxime distinctio repellendus possimus praesentium dignissimos inventore blanditiis architecto ab, voluptate, nobis ad omnis quibusdam.
  Amet aliquam vitae similique quos tempora reiciendis nihil, voluptates dicta autem maiores. Pariatur quisquam sapiente placeat nam veniam numquam provident nesciunt iste beatae tempore laboriosam quibusdam obcaecati, deleniti maxime cumque?
  Praesentium, ullam, illum necessitatibus dignissimos omnis voluptate fugit enim reiciendis unde quam temporibus magnam accusamus non asperiores officia doloribus molestiae eum repellendus perspiciatis nostrum optio placeat in autem quidem? Deleniti.
  Ad, adipisci provident. Atque in culpa doloribus quidem possimus aliquid modi, velit laboriosam quis libero voluptas ea magnam perferendis, quae quia facere dolorem laborum quasi at reprehenderit earum impedit reiciendis.
  Officiis accusamus ab doloremque sapiente unde eum placeat nihil ratione, optio eos neque doloribus delectus atque rerum possimus ullam recusandae est commodi ducimus natus magni nemo expedita illo necessitatibus! Placeat.
  Velit magni rem aliquid corrupti fuga numquam voluptatum, ipsum doloremque ducimus nesciunt voluptas ad repudiandae eos officiis assumenda consequuntur ea! Dolor minima aut cum iste nesciunt, similique ea maiores omnis!
  Cumque, quaerat. Soluta corporis rerum quae tempore vero optio facere aspernatur consectetur possimus ullam iusto cumque, eligendi repellendus quos adipisci animi neque qui ipsum, non ut. Provident necessitatibus quidem laudantium!
  Vel tempore est iure dolore pariatur deserunt eligendi iste voluptatum quis soluta amet sit quae facilis, ipsum aperiam culpa omnis, cumque blanditiis. Commodi illo dolore exercitationem. Sunt distinctio voluptatibus modi!
  Minus ex quo eum nobis sequi tempore, quae voluptatum excepturi, impedit architecto atque deleniti. Numquam minus earum asperiores corporis quam natus error laudantium amet dolorem, nemo accusamus at consequuntur eaque.
  Incidunt et reiciendis labore odio impedit perferendis nisi molestias quam molestiae provident, corporis odit non placeat voluptatem dolores laudantium numquam atque vitae consequatur sint dignissimos. Ipsam ea alias exercitationem necessitatibus.
  Deserunt illum, voluptatum sequi asperiores voluptates necessitatibus maxime ipsum quis perspiciatis eum reprehenderit. Aliquam natus, magnam ut nostrum facere quibusdam voluptate unde molestiae beatae maiores! Corrupti fugiat mollitia aperiam quam.
  Iure deserunt eaque distinctio laborum, illo accusamus. Doloribus saepe accusamus earum recusandae maiores fuga ratione inventore illum, rem, distinctio ex quidem eaque repudiandae eos aperiam, quasi quam ea nemo? Recusandae.
  Esse eligendi mollitia nam tempora commodi, dolore perferendis asperiores reprehenderit saepe obcaecati! Corporis accusamus dolore dolorum excepturi, doloribus, debitis rerum praesentium in assumenda corrupti qui sint consectetur mollitia voluptas laborum.
  Quibusdam natus illo ad cupiditate possimus ut, aliquid recusandae amet ex ducimus nam non unde, accusantium, itaque veniam! Quaerat maiores corrupti facilis dolorem eum neque. Cupiditate animi voluptatibus repellendus temporibus?
  Cumque animi quae voluptate dolorum velit deserunt sequi ipsa est aut architecto neque labore, molestias assumenda voluptatum! Eum, nesciunt voluptas. Pariatur doloribus quibusdam at vel. Commodi rem voluptatibus quidem quia?
  Sunt, nesciunt ipsam labore harum enim quidem ad cupiditate saepe ut architecto, quaerat voluptas temporibus qui. Suscipit facilis sint harum molestias nobis veritatis sed, incidunt hic recusandae voluptatem corporis quisquam.
  Eaque, ea. Temporibus cumque aspernatur deleniti, ex quod adipisci voluptates dignissimos! Blanditiis pariatur ipsum sit, qui possimus aliquam laboriosam, sed rem nesciunt soluta ducimus libero ut, accusantium voluptas nisi repudiandae.
  Tempora commodi deserunt quis quo exercitationem, animi quibusdam officiis reprehenderit quas sunt consectetur et eius, repellat, necessitatibus vero quisquam doloribus obcaecati dignissimos ab sed enim laboriosam neque labore? Accusantium, eum.
  Facilis atque voluptas corporis quaerat ducimus, porro amet ab totam voluptates modi, ullam, quia exercitationem dolorem iure recusandae doloremque in? Obcaecati voluptatibus, quis quidem quos vel adipisci dolor at dolorem.
  Quisquam quaerat sapiente facilis accusantium. Eaque consequatur dolor ad debitis numquam vel aut suscipit sunt sit praesentium a odio similique eos, incidunt mollitia dolore dicta laudantium ex cum qui? Odit.
  Sequi, reprehenderit alias pariatur natus non quidem quaerat accusantium iure molestiae sapiente obcaecati recusandae possimus, id perspiciatis nostrum. Ea at vero sequi magnam illum aperiam corporis quisquam dignissimos doloremque voluptates.
  Voluptas temporibus itaque, vero quos laudantium vitae nostrum libero perferendis quae odio voluptatibus nemo voluptate animi consequuntur autem nihil necessitatibus omnis esse impedit sunt exercitationem ab tempora. Optio, corrupti maiores!
  Dolorem voluptas, voluptatibus quasi voluptatum animi rem blanditiis ad tempore dolorum, porro repellat architecto fugiat, quos assumenda? Quaerat enim vel ullam nam sit corrupti eius, maiores culpa quasi, ex magni.
  Quas sapiente accusamus ullam voluptate velit reiciendis similique asperiores officia. Obcaecati adipisci pariatur hic rerum numquam inventore saepe eos maxime, voluptatum eveniet consectetur, iure, quia ab ipsam facere repellat ratione.
  Ullam sequi pariatur quidem, ipsam, mollitia veritatis iste suscipit officia obcaecati excepturi est. Incidunt ab consequatur, reprehenderit impedit, architecto quaerat quae culpa ipsa officia placeat non sunt. Aliquam, saepe quae?
  Animi, voluptatum quaerat excepturi nisi obcaecati incidunt numquam accusantium ratione laborum culpa assumenda accusamus eum reprehenderit. Beatae odit inventore, aspernatur fuga enim quasi eveniet perferendis, voluptates incidunt quis temporibus odio?
  Ipsam aliquam cumque obcaecati libero dolore quae vero eligendi delectus labore omnis numquam praesentium earum mollitia placeat vitae, iste reprehenderit natus ex ipsa enim. Similique aliquid dignissimos sapiente corporis aut.
  Porro nobis soluta ducimus nihil veniam corporis unde eligendi, fugiat quo vel quod tempore ab. Accusamus quis obcaecati ipsa quae delectus! Neque sequi hic exercitationem mollitia sunt, quam deserunt nesciunt.
  Repudiandae culpa sapiente, similique, autem nihil libero ab error aspernatur ex minima vero? Officia quam ducimus autem maiores aperiam nam veritatis? Eum accusamus error recusandae quibusdam esse nihil eius cumque.
  Quam, pariatur praesentium? Totam, dolorum ab? Maxime libero ipsa ex ipsum nobis, autem illo, nostrum consequuntur omnis soluta rerum eligendi laborum, tenetur iste dicta alias in earum. Ullam, dolorem facere.
  Quaerat adipisci eius quam distinctio temporibus officiis pariatur laudantium maxime nisi, ullam nulla, vel non tempora quos voluptate vero quo excepturi totam rerum blanditiis modi nam! Accusantium voluptas accusamus rem.
  Mollitia, optio? Beatae ad voluptas rerum eum. Commodi, vero quaerat velit totam placeat ducimus, accusantium, laborum unde dolores obcaecati aperiam rem delectus. Repudiandae architecto sit laborum animi, dolorem odit iste!
  Repudiandae pariatur non commodi, reiciendis tenetur facere laudantium corporis, sequi illo cum consequuntur impedit placeat numquam dolor quos illum maiores autem voluptate dolorem nesciunt asperiores temporibus facilis saepe! Consequuntur, nobis?
  Ex ipsa, distinctio a nihil, fugiat adipisci nemo tempora dolor vero nulla asperiores vel doloribus veritatis omnis facere ratione voluptatum sint. Quis nam numquam autem facere id dolorum. Necessitatibus, maxime.
  Aperiam, cum. Provident, quaerat! Optio minima explicabo ducimus molestias molestiae hic deserunt dignissimos aliquid earum architecto nihil nisi autem reprehenderit eius, voluptatibus sapiente atque assumenda? Dolores doloribus quo aspernatur autem!
  Consectetur quo, nam quae temporibus soluta repellat adipisci illo, atque cupiditate ex, earum cumque. Unde minus error cumque, eum, id veritatis placeat tempore corrupti iure recusandae suscipit delectus eligendi distinctio!
  Vel reprehenderit doloremque cumque velit cum et fugiat eligendi mollitia earum! Quis eaque impedit ea itaque molestiae esse ut delectus, ad deleniti nostrum quam ab obcaecati earum doloribus, iusto nulla.
  Earum ipsa fugiat excepturi necessitatibus voluptas repellat architecto ab? Inventore quod rem temporibus deserunt illo quo doloremque exercitationem ducimus fuga? Quas sunt alias dolores neque, placeat voluptate explicabo expedita perferendis?
  Quod blanditiis aspernatur architecto fugit odit nam perspiciatis laudantium, voluptate, molestiae assumenda earum eveniet? Nisi neque nam totam optio distinctio molestiae dolor corporis, repudiandae facilis quidem. Ipsum consequuntur magnam eligendi!
  Vel sunt atque debitis labore velit, deleniti deserunt officia, corrupti necessitatibus eaque eum quod voluptatem similique ipsum esse? Quidem rerum natus nesciunt rem tempore sit consequatur voluptas ab vitae laudantium?
  Eos nesciunt eius optio illum laudantium officiis nam ducimus ipsum. Adipisci aperiam delectus rem! Laudantium nobis totam pariatur, voluptas quae placeat quibusdam, accusamus ex, animi molestias maiores consequatur dolore delectus?`
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
                <CardLink href={"/backgrounds"} className="cursor-pointer">
                  See your guidelines
                </CardLink>
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
                  <StarHalf className="mr-1 h-5 w-5 fill-yellow-200 text-yellow-200" />
                  <Star className="mr-1 h-5 w-5 fill-yellow-200 text-yellow-200" />
                  <Star className="mr-1 h-5 w-5 fill-yellow-200 text-yellow-200" />
                  <Star className="mr-1 h-5 w-5 fill-yellow-200 text-yellow-200" />
                  <Star className="mr-1 h-5 w-5 fill-yellow-200 text-yellow-200" />
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
          <Alert dismissAfter={2000}>
            <AlertTitle>This is alert title!</AlertTitle>
            <AlertDescription>This is alert description!</AlertDescription>
          </Alert>
        </ComponentCard>
      </ComponentShowcase>
      <ComponentShowcase title="Code and Preview">
        <ComponentCard>
          <CodePreview code={componentCode} component={<Alert />} />
        </ComponentCard>
      </ComponentShowcase>
    </>
  );
};

export default Home;
