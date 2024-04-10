/*
Template Name: Xeria - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Version: 1.0.0
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Main Js File
*/


!(function ($) {
  "use strict";

  var Components = function () {};

  //initializing tooltip
  (Components.prototype.initTooltipPlugin = function () {
    $.fn.tooltip && $('[data-toggle="tooltip"]').tooltip();
  }),
    //initializing popover
    (Components.prototype.initPopoverPlugin = function () {
      $.fn.popover && $('[data-toggle="popover"]').popover();
    }),
    //initializing toast
    (Components.prototype.initToastPlugin = function () {
      $.fn.toast && $('[data-toggle="toast"]').toast();
    }),
    //initializing Slimscroll
    (Components.prototype.initSlimScrollPlugin = function () {
      //You can change the color of scroll bar here
      $.fn.slimScroll &&
        $(".slimscroll").slimScroll({
          height: "auto",
          position: "right",
          size: "8px",
          touchScrollStep: 20,
          color: "#9ea5ab",
        });
    }),
    //initializing form validation
    (Components.prototype.initFormValidation = function () {
      $(".needs-validation").on("button", function (event) {
        $(this).addClass("was-validated");
        if ($(this)[0].checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          return false;
        }
        return true;
      });
    }),
    //initializing custom modal
    (Components.prototype.initCustomModalPlugin = function () {
      $('[data-plugin="custommodal"]').on("click", function (e) {
        e.preventDefault();
        var modal = new Custombox.modal({
          content: {
            target: $(this).attr("href"),
            effect: $(this).attr("data-animation"),
          },
          overlay: {
            color: $(this).attr("data-overlayColor"),
          },
        });
        //Open
        modal.open();
      });
    }),
    //counterup
    (Components.prototype.initCounterUp = function () {
      var delay = $(this).attr("data-delay") ? $(this).attr("data-delay") : 100; //default is 100
      var time = $(this).attr("data-time") ? $(this).attr("data-time") : 1200; //default is 1200
      $('[data-plugin="counterup"]').each(function (idx, obj) {
        $(this).counterUp({
          delay: 100,
          time: 1200,
        });
      });
    }),
    //peity charts
    (Components.prototype.initPeityCharts = function () {
      $('[data-plugin="peity-pie"]').each(function (idx, obj) {
        var colors = $(this).attr("data-colors") ? $(this).attr("data-colors").split(",") : [];
        var width = $(this).attr("data-width") ? $(this).attr("data-width") : 20; //default is 20
        var height = $(this).attr("data-height") ? $(this).attr("data-height") : 20; //default is 20
        $(this).peity("pie", {
          fill: colors,
          width: width,
          height: height,
        });
      });
      //donut
      $('[data-plugin="peity-donut"]').each(function (idx, obj) {
        var colors = $(this).attr("data-colors") ? $(this).attr("data-colors").split(",") : [];
        var width = $(this).attr("data-width") ? $(this).attr("data-width") : 20; //default is 20
        var height = $(this).attr("data-height") ? $(this).attr("data-height") : 20; //default is 20
        $(this).peity("donut", {
          fill: colors,
          width: width,
          height: height,
        });
      });

      $('[data-plugin="peity-donut-alt"]').each(function (idx, obj) {
        $(this).peity("donut");
      });

      //line
      $('[data-plugin="peity-line"]').each(function (idx, obj) {
        $(this).peity("line", $(this).data());
      });

      //bar
      $('[data-plugin="peity-bar"]').each(function (idx, obj) {
        var colors = $(this).attr("data-colors") ? $(this).attr("data-colors").split(",") : [];
        var width = $(this).attr("data-width") ? $(this).attr("data-width") : 20; //default is 20
        var height = $(this).attr("data-height") ? $(this).attr("data-height") : 20; //default is 20
        $(this).peity("bar", {
          fill: colors,
          width: width,
          height: height,
        });
      });
    }),
    (Components.prototype.initKnob = function () {
      $('[data-plugin="knob"]').each(function (idx, obj) {
        $(this).knob();
      });
    }),
    (Components.prototype.initTippyTooltips = function () {
      if ($('[data-plugin="tippy"]').length > 0) tippy('[data-plugin="tippy"]');
    }),
    //initilizing
    (Components.prototype.init = function () {
      var $this = this;
      this.initTooltipPlugin(), this.initPopoverPlugin(), this.initToastPlugin(), this.initSlimScrollPlugin(), this.initFormValidation(), this.initCustomModalPlugin(), this.initCounterUp(), this.initPeityCharts(), this.initKnob();
      this.initTippyTooltips();
    }),
    ($.Components = new Components()),
    ($.Components.Constructor = Components);
})(window.jQuery),
  (function ($) {
    "use strict";

    /**
    Portlet Widget
    */
    var Portlet = function () {
      (this.$body = $("body")), (this.$portletIdentifier = ".card"), (this.$portletCloser = '.card a[data-toggle="remove"]'), (this.$portletRefresher = '.card a[data-toggle="reload"]');
    };

    //on init
    (Portlet.prototype.init = function () {
      //panel closest
      var $this = this;
      $(document).on("click", this.$portletCloser, function (ev) {
        ev.preventDefault();
        var $portlet = $(this).closest($this.$portletIdentifier);
        var $portlet_parent = $portlet.parent();
        $portlet.remove();
        if ($portlet_parent.children().length == 0) {
          $portlet_parent.remove();
        }
      });

      //panel reload
      $(document).on("click", this.$portletRefresher, function (ev) {
        ev.preventDefault();
        var $portlet = $(this).closest($this.$portletIdentifier);
        // This is just a simulation, nothing is going to be reloaded
        $portlet.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');
        var $pd = $portlet.find(".card-disabled");
        setTimeout(function () {
          $pd.fadeOut("fast", function () {
            $pd.remove();
          });
        }, 500 + 300 * (Math.random() * 5));
      });
    }),
      //
      ($.Portlet = new Portlet()),
      ($.Portlet.Constructor = Portlet);
  })(window.jQuery),
  (function ($) {
    "use strict";

    var App = function () {
      (this.$body = $("body")), (this.$window = $(window));
    };

    /**
    Resets the scroll
    */
    (App.prototype._resetSidebarScroll = function () {
      //sidebar - scroll container
      $(".slimscroll-menu").slimscroll({
        height: "auto",
        position: "right",
        size: "8px",
        color: "#9ea5ab",
        wheelStep: 5,
        touchScrollStep: 20,
      });
    }),
      /**
       * Initlizes the menu - top and sidebar
       */
      (App.prototype.initMenu = function () {
        var $this = this;

        //left menu collapse
        $(".button-menu-mobile").on("click", function (event) {
          event.preventDefault();
          $this.$body.toggleClass("sidebar-enable");
          if ($this.$window.width() >= 768) {
            $this.$body.toggleClass("enlarged");
          } else {
            $this.$body.removeClass("enlarged");
          }

          //sidebar - scroll container
          $this._resetSidebarScroll();
        });

        //sidebar - main menu
        $("#side-menu").metisMenu();

        //sidebar - scroll container
        $this._resetSidebarScroll();

        //right side-bar toggle
        $(".right-bar-toggle").on("click", function (e) {
          $("body").toggleClass("right-bar-enabled");
        });

        $(document).on("click", "body", function (e) {
          if ($(e.target).closest(".right-bar-toggle, .right-bar").length > 0) {
            return;
          }

          if ($(e.target).closest(".left-side-menu, .side-nav").length > 0 || $(e.target).hasClass("button-menu-mobile") || $(e.target).closest(".button-menu-mobile").length > 0) {
            return;
          }

          $("body").removeClass("right-bar-enabled");
          $("body").removeClass("sidebar-enable");
          return;
        });

        //activate the menu in left side bar based on url
        $("#side-menu a").each(function () {
          var pageUrl = window.location.href.split(/[?#]/)[0];
          if (this.href == pageUrl) {
            $(this).addClass("active");
            $(this).parent().addClass("active"); // add active to li of the current link
            $(this).parent().parent().addClass("in");
            $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
            $(this).parent().parent().parent().addClass("active");
            $(this).parent().parent().parent().parent().addClass("in"); // add active to li of the current link
            $(this).parent().parent().parent().parent().parent().addClass("active");
          }
        });

        //topbar - main menu
        $(".navbar-toggle").on("click", function (event) {
          $(this).toggleClass("open");
          $("#navigation").slideToggle(400);
        });

        // Preloader
        $(window).on("load", function () {
          $("#status").fadeOut();
          $("#preloader").delay(350).fadeOut("slow");
        });
      }),
      /**
       * Init the layout - with broad sidebar or compact side bar
       */
      (App.prototype.initLayout = function () {
        //in case of small size, add class enlarge to have minimal menu
        if (this.$window.width() >= 768 && this.$window.width() <= 1028) {
          this.$body.addClass("enlarged");
        } else {
          if (this.$body.data("keep-enlarged") != true) {
            this.$body.removeClass("enlarged");
          }
        }
      }),
      //initilizing
      (App.prototype.init = function () {
        var $this = this;
        this.initLayout();
        $.Portlet.init();
        this.initMenu();
        $.Components.init();
        //on window resize, make menu flipped automatically
        $this.$window.on("resize", function (e) {
          e.preventDefault();
          $this.initLayout();
          $this._resetSidebarScroll();
        });
      }),
      ($.App = new App()),
      ($.App.Constructor = App);
  })(window.jQuery),
  //initializing main application module
  (function ($) {
    "use strict";
    $.App.init();
  })(window.jQuery);

//waves Effect
Waves.init();

//sumernote
jQuery(document).ready(function () {
  $("#summernote-editor").summernote({
    height: 500,
    minHeight: null,
    maxHeight: null,
    focus: !1,
  }),
    $("#observauxglob-editor").summernote({
      height: 60,
      minHeight: null,
      maxHeight: null,
      focus: !1,
    }),
    $("#summernote-inline").summernote({
      airMode: !0,
    });
});

//iniciamos Notificaciones jquery-toast
!(function (p) {
  "use strict";
  var t = function () {};
  (t.prototype.send = function (t, i, o, e, n, a, s, r) {
    a || (a = 3e3), s || (s = 1);
    var c = {
      heading: t,
      text: i,
      position: o,
      loaderBg: e,
      icon: n,
      hideAfter: a,
      stack: s,
    };
    r && (c.showHideTransition = r), console.log(c), p.toast().reset("all"), p.toast(c);
  }),
    (p.NotificationApp = new t()),
    (p.NotificationApp.Constructor = t);
})(window.jQuery),
  (function (i) {
    "use strict";
    i("#txtplantilla").on("click", function (t) {
      i.NotificationApp.send("Para Generar Plantilla!", "1. Ingresar Contacto Cliente <br/> 2. Seleccionar la Tecnología <br/> 3. Escoger Plantilla", "top-center", "#3b98b5", "info");
    });
    // i("#txtcuenta_enlace").on("click", function (t) {
    //   i.NotificationApp.send("Ten presente!", "1. Buscar la Cuenta y/o Enlace", "top-right", "#3b98b5", "info");
    //   });

      /* Otros ejemplos de Notificaciones */
      // i("#toastr-two").on("click", function(t) {
      //     i.NotificationApp.send("Heads up!", "Check below fields please.", "top-center", "#da8609", "warning")
      // }), i("#toastr-three").on("click", function(t) {
      //     i.NotificationApp.send("Well Done!", "You successfully read this important alert message", "top-right", "#5ba035", "success")
      // }), i("#toastr-four").on("click", function(t) {
      //     i.NotificationApp.send("Oh snap!", "Change a few things up and try submitting again.", "top-right", "#bf441d", "error")
      // }), i("#toastr-five").on("click", function(t) {
      //     i.NotificationApp.send("How to contribute?", ["Fork the repository", "Improve/extend the functionality", "Create a pull request"], "top-right", "#1ea69a", "info")
      // }), i("#toastr-six").on("click", function(t) {
      //     i.NotificationApp.send("Can I add <em>icons</em>?", "Yes! check this <a href='https://github.com/kamranahmedse/jquery-toast-plugin/commits/master'>update</a>.", "top-right", "#1ea69a", "info", !1)
      // }), i("#toastr-seven").on("click", function(t) {
      //     i.NotificationApp.send("", "Set the `hideAfter` property to false and the toast will become sticky.", "top-right", "#1ea69a", "")
      // }), i("#toastr-eight").on("click", function(t) {
      //     i.NotificationApp.send("", "Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.", "top-right", "#1ea69a", "info", 3e3, 1, "fade")
      // }), i("#toastr-nine").on("click", function(t) {
      //     i.NotificationApp.send("Slide transition", "Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.", "top-right", "#1ea69a", "info", 3e3, 1, "slide")
      // }), i("#toastr-ten").on("click", function(t) {
      //     i.NotificationApp.send("Plain transition", "Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.", "top-right", "#3b98b5", "info", 3e3, 1, "plain")
      // })

  })(window.jQuery);

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
    if(e.keyCode == 13) {
      e.preventDefault();
    }
  }))
});

//datepicker
$('.date').datepicker({
  format: "yyyy/mm/dd",
  language: "es",
  todayHighlight: true,
  autoclose: true
});

let TABLACOB = $("#Comentarios_Backoffice").DataTable({
  order: [[0, "desc"]],
  iDisplayLength: 3,
  aLengthMenu: [
    [3, 5, 10, 25, 50, -1],
    [3, 5, 10, 25, 50, "All"],
  ],
  columnDefs: [
    {
      targets: [],
      visible: true,
      searchable: false,
    },
  ],
  dom: "lfrtipB",
  buttons: [],

  language: {
    lengthMenu: "Mostrar _MENU_ registros",
    zeroRecords: "No se encontraro resultados",
    info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    infoEmpty: "Mostrando registros de 0 al 0 de un total de 0 registros",
    infoFiltered: "(Filtrado de un total de _MAX_ registros)",
    sSearch: "Buscar",
    oPaginate: {
      sFirst: "Primero",
      sLast: "Ultimo",
      sNext: ">>",
      sPrevious: "<<",
    },
    sProcessing: "Procesando",
    paginate: {
      previous: "<i class='mdi mdi-chevron-left'>",
      next: "<i class='mdi mdi-chevron-right'>",
    },
  }
});

async function tablaComent(id, skill, css, tabla_id) {
  if (TABLACOB) {

    let id_modal = id;
    // console.log(id_modal);
    let skill_modal = skill;
    // console.log(skill_modal);
    let id_tabla = document.getElementById(css);
    id_tabla.style.backgroundColor='#1e91d7';

    let comentarios = await postData("/ver_coment", { radicado: id_modal, canal: skill_modal });
    // console.log(comentarios);

    const tabla_coment = document.querySelector("#"+ tabla_id + " tbody");
    
    let tbody_html = ``;    
    let contador = 0
    comentarios.forEach((element) => {     
      let arr = Object.values(element);
      contador =  contador + 1;
      tbody_html += `
            <tr>
              <td><strong><center>${contador}</center></strong></td>
              <td><center>${arr[1]}</center></td>
              <td><center>${arr[7]}</center></td>
              <td><center>${arr[3]}</center></td>
              <td><center>${arr[4]}</center></td>
            </tr>`;

      //Destruyo la tabla
      TABLACOB.destroy();

      tabla_coment.innerHTML = tbody_html;

      TABLACOB = $("#"+tabla_id).DataTable({
        order: [[0, "desc"]],
        iDisplayLength: 3,
        aLengthMenu: [
          [3, 5, 10, 25, 50, -1],
          [3, 5, 10, 25, 50, "All"],
        ],
        columnDefs: [
          {
            targets: [],
            visible: true,
            searchable: false,
          },
        ],
        dom: "lfrtipB",
        buttons: [],

        language: {
          lengthMenu: "Mostrar _MENU_ registros",
          zeroRecords: "No se encontraro resultados",
          info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          infoEmpty: "Mostrando registros de 0 al 0 de un total de 0 registros",
          infoFiltered: "(Filtrado de un total de _MAX_ registros)",
          sSearch: "Buscar",
          oPaginate: {
            sFirst: "Primero",
            sLast: "Ultimo",
            sNext: ">>",
            sPrevious: "<<",
          },
          sProcessing: "Procesando",
          paginate: {
            previous: "<i class='mdi mdi-chevron-left'>",
            next: "<i class='mdi mdi-chevron-right'>",
          },
        }
      });
    });
  }
};

// Detengo Loader para todas las Vistas (ง︡'-'︠)ง
document.getElementById('containerLoader').classList.add('hidden');
