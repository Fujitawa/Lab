$(document).ready(function () {
    $('#save-btn').click(function () {
        var postData = [];

        $('.blog-post').each(function () {
            var postTitle = $(this).find('.post-title').text().trim();
            var postContent = $(this).find('.post-content').text().trim();

            postData.push({
                title: postTitle,
                content: postContent
            });
        });

        console.log(postData);

        // Send postData to your server to save changes (optional)
        // $.ajax({
        //     url: 'your-save-url',
        //     method: 'POST',
        //     data: JSON.stringify(postData),
        //     contentType: 'application/json',
        //     success: function (response) {
        //         console.log('Blog data saved successfully');
        //     },
        //     error: function (error) {
        //         console.error('Error while saving blog data', error);
        //     },
        // });
    });
});
