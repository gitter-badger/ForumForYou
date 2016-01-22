angular
.module('Blog')
.controller('articlesCtrl', ['$scope', function($scope) {
    $scope.articles = [
        {
            title: 'Fun facts!',
            image: 'assets/images/article-fun.png',
            contentTrimmed: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor metus varius elementum venenatis. Vivamus id sodales magna. Ut turpis urna, blandit sit amet posuere ultrices, ullamcorper vel enim. Nunc feugiat porttitor neque, sit amet venenatis neque scelerisque eu. Ut felis turpis, sodales a sapien ut, ornare porttitor nibh. Vestibulum vel est laoreet, maximus ante eget, consequat ante. Aenean vestibulum nibh eget euismod vulputate. Aliquam erat volutpat. Sed imperdiet malesuada posuere. Morbi posuere risus at massa egestas, sit amet convallis magna tincidunt. Nunc eu faucibus purus. ed auctor eu mauris sit amet pretium. Aenean accumsan, ipsum eget rutrum tincidunt, mauris felis interdum velit, eu cursus sem dui vel justo...',
            id: 6
        },
        {
            title: 'Learning Angular JS',
            image: 'assets/images/article-angular.png',
            contentTrimmed: 'Nulla convallis justo est, eu lobortis arcu condimentum eu. In dignissim, erat eget bibendum dignissim, erat eros iaculis purus, quis aliquam nisi elit id purus. Duis vehicula sed ligula ac dictum. Sed quis arcu consectetur, posuere lorem eget, ultrices enim. Vestibulum auctor bibendum leo in hendrerit. Maecenas euismod magna massa, eu laoreet urna luctus ut. Maecenas dui tortor, bibendum sit amet urna eu, rhoncus tempor massa...',
            id: 5
        },
        {
            title: '100 Good Books to Read: Book Recommendations',
            image: 'assets/images/article-book.png',
            contentTrimmed: 'Nunc ac purus sed tellus consequat iaculis eget eleifend ex. Suspendisse vitae euismod urna. Nam vitae gravida metus. Maecenas dignissim sit amet nibh ac ultrices. Sed sodales mi nec vehicula dapibus. Fusce accumsan ante sed lacus lacinia, vitae mollis ipsum suscipit. Praesent ornare ultrices quam, at semper ligula dictum in. Aliquam ut urna feugiat, consectetur est eu, pulvinar nulla. Proin quis pellentesque tortor. Cras laoreet, dolor in blandit sodales, elit dolor tincidunt lacus, nec ultrices tortor ligula eget ex. Donec nec mauris scelerisque, interdum odio a, accumsan dolor. Cras volutpat nec erat venenatis rhoncus...',
            id: 4
        },
        {
            title: 'Android 6 Vs. iOS 9: The Showdown',
            image: 'assets/images/article-android.png',
            contentTrimmed: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum...',
            id: 3
        },
        {
            title: 'The Organic Effect...',
            image: 'assets/images/article-bio.png',
            contentTrimmed: 'Sed convallis mauris id elementum ultricies. Morbi vitae lorem nec metus semper iaculis. Ut sit amet lorem ultrices, tristique ligula at, finibus nulla. Maecenas quis orci ac ligula tincidunt scelerisque et sed purus. Nam pulvinar mauris nec mi aliquam fermentum. Ut orci velit, dictum vitae magna ut, aliquet efficitur odio. Nullam volutpat ac nunc sit amet efficitur. Etiam nisi neque, volutpat in venenatis eu, porta non velit. Cras finibus volutpat aliquet. Aenean vitae vestibulum dui. Sed a posuere massa. Vivamus condimentum orci in lacinia euismod. Phasellus id elit mi. Etiam ut ipsum eu orci rhoncus iaculis non quis libero. Proin commodo enim eget varius vehicula...',
            id: 2
        },
        {
            title: 'Breaking news about Facebook!',
            image: 'assets/images/article-facebook.png',
            contentTrimmed: 'Fusce sed consectetur odio. Sed at metus ac nibh laoreet aliquet iaculis a justo. Aenean faucibus, arcu sed consequat consectetur, risus ligula consectetur diam, et bibendum justo justo ut quam. Etiam vitae finibus lacus. Duis ultrices porttitor magna, a gravida tellus scelerisque quis. Nullam mattis malesuada ipsum, non posuere tortor condimentum a. Praesent ornare erat sed arcu hendrerit, et varius sapien consectetur. Nullam consectetur sed nisi et efficitur. Suspendisse volutpat aliquam magna vel mollis. Sed auctor eu mauris sit amet pretium. Aenean accumsan, ipsum eget rutrum tincidunt, mauris felis interdum velit, eu cursus sem dui vel justo. Vivamus varius, massa id molestie commodo, ante leo lacinia metus, a porttitor est dui sed mauris. Vivamus suscipit lorem sed consequat facilisis. Etiam vitae enim blandit, iaculis nisl at, hendrerit leo. Etiam varius sodales lectus sed maximus...',
            id: 1
        }
    ];
    $scope.styles = {
        0 : 'default',
        1 : 'danger',
        2 : 'info',
        3 : 'warning',
        4 : 'success',
        5 : 'primary'
    };
}]);
