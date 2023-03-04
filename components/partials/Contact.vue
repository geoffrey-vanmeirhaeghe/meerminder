<template>
  <div>
    <ModulePageBlocks
      class="w-full"
      v-if="!confirmationMessage"
      :ModulePage="
        modulePage.data.attributes.Contact.data.attributes.Slug
          ? modulePage.data.attributes.Contact.data.attributes.Slug
          : ''
      "
    />
    <div v-else class="container">
      <h1 class="text-brown-500 pb-6 mt-12 text-2xl lg:text-4xl">
        {{ confirmationTitle }}
      </h1>
    </div>
    <div class="container flex justify-center" v-if="!confirmationMessage">
      <form id="contactform" class="w-full max-w-2xl">
        <div class="bg-blue-100 p-6 lg:p-12 pb-12 w-full">
          <div>
            <div class="w-full">
              <label for="Name" class="block">Naam</label>
              <input
                v-model="Name"
                name="Name"
                type="text"
                placeholder="Vul je naam in"
                class="block w-full"
                required
              />
            </div>
            <div class="w-full mt-4">
              <label for="Email" class="block">E-mailadres</label>
              <input
                v-model="Email"
                name="Email"
                type="email"
                placeholder="Vul je e-mailadres in"
                class="block w-full"
                required
              />
            </div>
            <div class="w-full mt-4">
              <label for="Address" class="block">E-mailadres</label>
              <input
                v-model="Address"
                name="Address"
                type="text"
                placeholder="Vul je adres in"
                class="block w-full"
                required
              />
            </div>
            <div class="w-full mt-4">
              <label for="City" class="block">Plaats</label>
              <input
                v-model="City"
                name="City"
                type="text"
                placeholder="Vul je stad/gemeente in"
                class="block w-full"
                required
              />
            </div>
            <div class="w-full mt-4">
              <label for="PostalCode" class="block">Postcode</label>
              <input
                v-model="PostalCode"
                name="PostalCode"
                type="text"
                placeholder="Vul je stad/gemeente in"
                class="block w-full"
                required
              />
            </div>
            <div class="w-full mt-4">
              <label for="Phone" class="block">Telefoonnummer</label>
              <input
                v-model="Phone"
                name="Phone"
                type="text"
                placeholder="Vul je telefoonnummer in"
                class="block w-full"
                required
              />
            </div>
            <div class="w-full mt-4">
              <label for="Message" class="block">Jouw boodschap</label>
              <textarea
                v-model="Message"
                form="contactform"
                rows="10"
                placeholder="Vul jouw boodschap in"
                class="w-full"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end text-brown-900 pt-6">
          <input
            v-model="Consent"
            type="checkbox"
            id="Consent"
            name="Consent"
            value=""
            required
          />
          <label for="Consent" class="ml-4 mb-0 not-italic">
            Ik ga akkoord met
            <a href="/algemene-voorwaarden" class="text-brown-500 underline">
              de algemene voorwaarden voorwaarden
            </a>
            van deze website
          </label>
        </div>
        <div class="flex justify-end mt-6 font-bold">
          <button class="PrimaryButton" @click="createContact()">
            Verzenden
            <font-awesome-icon
              :icon="['fas', 'chevron-right']"
              class="ml-3 text-sm"
            />
          </button>
        </div>
      </form>
    </div>
    <div v-else class="container">
      <p
        class="mt-8 max-w-3xl text-lg font-light leading-8 text-brown-900 mb-8"
      >
        <strong>{{ confirmationMessage }}</strong>
      </p>
      <a class="primary-button text-white" href="/"
        >Ga naar de homepagina
        <fa :icon="['fas', 'chevron-right']" class="ml-8" />
      </a>
    </div>
  </div>
</template>

<script>
import ModulePageBlocks from "~/components/partials/ModulePageBlocks";
import { ModulePagesQuery } from "~/graphql/queries/module-pages";
import { CREATE_CONTACT } from "~/graphql/queries/contact";

export default {
  name: "createContact",

  components: {
    ModulePageBlocks,
  },

  apollo: {
    modulePage: {
      prefetch: true,
      query: ModulePagesQuery,
    },
  },

  data() {
    return {
      Name: "",
      Email: "",
      Address: "",
      City: "",
      PostalCode: "",
      Phone: "",
      Message: "",
      Consent: "",
      confirmationTitle: "",
      confirmationMessage: "",
    };
  },
  methods: {
    // createContact(event) {
    //   const myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");

    //   const graphql = JSON.stringify({
    //     query:
    //       "mutation CreateContact(\n    $firstname: String!\n    $lastname: String!\n    $email: String!\n    $phone: String!\n    $message: String!\n  ) {\n    createcontact(\n      input: {\n        data: {\n          firstname: $firstname\n          lastname: $lastname\n          email: $email\n          phone: $phone\n          message: $message\n        }\n      }\n    ) {\n      contact {\n        id\n        firstname\n        lastname\n        email\n        phone\n        message\n      }\n    }\n  }",
    //     variables: {
    //       firstname: this.firstname,
    //       lastname: this.lastname,
    //       email: this.email,
    //       phone: this.phone,
    //       message: this.message,
    //     },
    //   });
    //   const contactOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: graphql,
    //     redirect: "follow",
    //   };

    //   fetch("http://localhost:1337/graphql", contactOptions)
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log("error", error));

    //   if (
    //     this.firstname &&
    //     this.lastname &&
    //     this.email &&
    //     this.phone &&
    //     this.message &&
    //     this.Consent
    //   ) {
    //     this.confirmationTitle = "Bedankt voor uw bericht";
    //     this.confirmationMessage =
    //       "Uw bericht werd goed ontvangen. U ontvangt binnenkort een bevestiging in uw mailbox!";

    //     // Confirmation mail to customer
    //     const confirmationEmail = {
    //       method: "POST",
    //       headers: myHeaders,
    //       body: JSON.stringify({
    //         from: "info@meerminder.be",
    //         to: this.email,
    //         cc: "info@meerminder.be",
    //         subject: "Bevestiging van jouw bericht aan Meerminder",
    //         html: `
    //         <table>
    //          <tbody>
    //           <tr>
    //             <td>
    //               <h1>Bedankt voor je boodschap. We sturen je zo snel mogelijk een antwoord op jouw vraag.</h1>
    //               <h3>Dit is het bericht dat je naar ons stuurde:</h3>
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               <p style="font-size:18px">${this.message}</p>
    //             </td>
    //           </tr>
    //           <tr>
    //             <td style="height: 20px;">
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               Dit zijn je contactgegevens:
    //               <br>Naam: ${this.firstname} ${this.lastname}
    //               <br>E-mailadres ${this.email}
    //               <br>Telefoonnummer: ${this.phone}
    //             </td>
    //           </tr>
    //          </tbody>
    //         </table>
    //         `,
    //       }),
    //       redirect: "follow",
    //     };

    //     fetch("http://localhost:1337/email/", confirmationEmail)
    //       .then((response) => response.text())
    //       .then((result) => console.log(result))
    //       .catch((error) => console.log("error", error));
    //   }
    // },
    createContact(event) {
      const { Name, Email, Address, City, PostalCode, Phone, Message } =
        this.$data;
      if (
        Name &&
        Email &&
        Address &&
        City &&
        PostalCode &&
        Phone &&
        Message &&
        Consent
      ) {
        this.$apollo.mutate({
          mutation: CREATE_CONTACT,
          variables: {
            Name,
            Email,
            Address,
            City,
            PostalCode,
            Phone,
            Message,
          },
        });
        this.confirmationTitle = "Bedankt voor uw bericht";
        this.confirmationMessage =
          "Uw bericht werd goed ontvangen. U ontvangt binnenkort een bevestiging in uw mailbox!";
      }
    },
  },
};
</script>
