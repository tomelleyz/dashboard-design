import Image from "next/image";
import Link from "next/link";
import NavigationPanelMobile from "./navigation/NavigationPanelMobile";

export default function MainContent() {
  return (
    <section className="relative h-full w-full bg-white">
      <header className="sticky top-0 z-20 flex justify-between border border-solid border-grey-500 bg-white px-8 py-[18px] lg:justify-end">
        <Link href="/" className="block lg:hidden">
          <Image
            src="/klasha-letter-logo.svg"
            width={35}
            height={35}
            alt="Klasha logo"
          />
        </Link>

        <NavigationPanelMobile />
      </header>
      <div className="h-full overflow-y-auto">
        <h1 className="text-xl">
          The following example pages show two different ways to structure your
          CSS. The first uses the standard attributes wherever possible. The
          second example uses CSS Custom Properties to set values for a
          font-variation-settings string and shows how you can more easily
          update single variable values by overriding a single variable rather
          than rewriting the whole string. Note the hover effect on the h2,
          which only alters the grade axis custom property value.
        </h1>
        <h1 className="text-xl">
          The following example pages show two different ways to structure your
          CSS. The first uses the standard attributes wherever possible. The
          second example uses CSS Custom Properties to set values for a
          font-variation-settings string and shows how you can more easily
          update single variable values by overriding a single variable rather
          than rewriting the whole string. Note the hover effect on the h2,
          which only alters the grade axis custom property value.
        </h1>
        <h1 className="text-xl">
          The following example pages show two different ways to structure your
          CSS. The first uses the standard attributes wherever possible. The
          second example uses CSS Custom Properties to set values for a
          font-variation-settings string and shows how you can more easily
          update single variable values by overriding a single variable rather
          than rewriting the whole string. Note the hover effect on the h2,
          which only alters the grade axis custom property value.
        </h1>
        <h1 className="text-xl">
          The following example pages show two different ways to structure your
          CSS. The first uses the standard attributes wherever possible. The
          second example uses CSS Custom Properties to set values for a
          font-variation-settings string and shows how you can more easily
          update single variable values by overriding a single variable rather
          than rewriting the whole string. Note the hover effect on the h2,
          which only alters the grade axis custom property value.
        </h1>
        <h1 className="text-xl">
          The following example pages show two different ways to structure your
          CSS. The first uses the standard attributes wherever possible. The
          second example uses CSS Custom Properties to set values for a
          font-variation-settings string and shows how you can more easily
          update single variable values by overriding a single variable rather
          than rewriting the whole string. Note the hover effect on the h2,
          which only alters the grade axis custom property value.
        </h1>
        <h1 className="text-xl">
          The following example pages show two different ways to structure your
          CSS. The first uses the standard attributes wherever possible. The
          second example uses CSS Custom Properties to set values for a
          font-variation-settings string and shows how you can more easily
          update single variable values by overriding a single variable rather
          than rewriting the whole string. Note the hover effect on the h2,
          which only alters the grade axis custom property value.
        </h1>
      </div>
    </section>
  );
}
