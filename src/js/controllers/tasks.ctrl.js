(function () {


    function TasksController()
    {
        this.uniqueId = function(){
            var min,max;
            min=0; max=9999;

            return (Math.floor(Math.random() * (max - min + 1)) + min);

        };


        this.tasks = [{
            name:'1111',
            tasks:[
                {
                    name:'1111-2',
                    tasks:[
                        {
                            name:'1111-2-1'
                        },
                        {
                            name:'1111-2-2'
                        },
                        {
                            name:'1111-2-3'
                        }
                    ]
                },
                {
                    name:'1111-33'
                },
                {
                    name:'1111-44'
                }
            ]
        },
            {

                name:'b',
                tasks:[
                    {
                        name:'a1',
                        tasks:[
                            {
                                name:'a-a1',
                                tasks:[
                                    {
                                        name:'a-a1',
                                        tasks:[
                                            {
                                                name:'a-a1',
                                                tasks:[
                                                    {
                                                        name:'a-a1',
                                                        tasks:[
                                                            {
                                                                name:'a-a1'
                                                            },
                                                            {
                                                                name:'a-a2'
                                                            },
                                                            {
                                                                name:'a-a3'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name:'a-a2'
                                                    },
                                                    {
                                                        name:'a-a3'
                                                    }
                                                ]
                                            },
                                            {
                                                name:'a-a2'
                                            },
                                            {
                                                name:'a-a3'
                                            }
                                        ]
                                    },
                                    {
                                        name:'a-a2'
                                    },
                                    {
                                        name:'a-a3'
                                    }
                                ]
                            },
                            {
                                name:'a-a2'
                            },
                            {
                                name:'a-a3'
                            }
                        ]
                    },
                    {
                        name:'a2',
                        tasks:[
                            {
                                name:'a2-a1'
                            },
                            {
                                name:'a2-a2'
                            },
                            {
                                name:'a2-a3'
                            }
                        ]

                    },
                    {
                        name:'a3',
                        tasks:[
                            {
                                name:'a3-a1',
                                tasks:[
                                    {
                                        name:'a3-a3-a1'
                                    },
                                    {
                                        name:'a3-a3-a2'
                                    },
                                    {
                                        name:'a3-a3-a3'
                                    }
                                ]
                            },
                            {
                                name:'a3-a2'
                            },
                            {
                                name:'a3-a3'
                            }
                        ]
                    }
                ]
            }
        ];
    }

    angular.module('TasksManager').controller('TasksController',[TasksController]);

})();